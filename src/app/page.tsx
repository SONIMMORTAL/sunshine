import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { MascotIntroSection } from "@/components/sections/MascotIntroSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { MomentsSection } from "@/components/sections/MomentsSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex w-full flex-col selection:bg-primary/30 selection:text-foreground">
        <HeroSection />
        <MascotIntroSection />
        <CurriculumSection />
        <GallerySection />
        <MomentsSection />
        <InvestmentSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
