import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const MAX_WIDTH = 1200;

async function walkDir(dir) {
  const files = await fs.readdir(dir);
  let allFiles = [];
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = await fs.stat(fullPath);
    if (stat.isDirectory()) {
      allFiles = allFiles.concat(await walkDir(fullPath));
    } else {
      if (fullPath.match(/\.(png|jpe?g)$/i)) {
        allFiles.push({ path: fullPath, size: stat.size });
      }
    }
  }
  return allFiles;
}

async function optimizeImages() {
  console.log('Starting image optimization...');
  const files = await walkDir(PUBLIC_DIR);
  
  for (const file of files) {
    // Only optimize if larger than ~300KB
    if (file.size > 300 * 1024) {
      console.log(`Optimizing: ${path.basename(file.path)} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);
      const tempPath = file.path + '.tmp';
      
      try {
        const metadata = await sharp(file.path).metadata();
        let pipeline = sharp(file.path);
        
        if (metadata.width > MAX_WIDTH) {
          pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
        }
        
        // Output format specific compression
        if (file.path.toLowerCase().endsWith('.png')) {
          pipeline = pipeline.png({ compressionLevel: 9, quality: 80, adaptiveFiltering: true });
        } else {
          pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
        }
        
        await pipeline.toFile(tempPath);
        await fs.rename(tempPath, file.path);
        
        const newStat = await fs.stat(file.path);
        console.log(` -> Reduced to: ${(newStat.size / 1024).toFixed(2)} KB`);
      } catch (e) {
        console.error(`Error optimizing ${file.path}:`, e.message);
      }
    }
  }
  console.log('Done optimizing images.');
}

optimizeImages();
