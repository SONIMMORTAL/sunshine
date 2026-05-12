"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

/**
 * Compact stack of avatar circles. Falls through to `next/image` so remote
 * pravatar URLs are optimized and lazy-loaded automatically.
 *
 * NOTE: `i.pravatar.cc` is a placeholder service. TODO (owner): swap for
 * real, consented family photos before launch.
 */
export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={`${url.imageUrl}-${index}`}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Avatar ${index + 1}`}
          className="inline-flex h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-muted shadow-sm dark:border-card"
        >
          <Image
            src={url.imageUrl}
            width={40}
            height={40}
            alt=""
            loading="lazy"
            className="h-10 w-10 object-cover"
            unoptimized
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-foreground text-center text-xs font-medium text-background dark:border-card"
        >
          +{numPeople}
        </span>
      )}
    </div>
  );
};
