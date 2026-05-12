/**
 * Visually-hidden "skip to main content" link for keyboard / screen reader
 * users. Becomes visible on focus and jumps to `#main`. Must sit at the very
 * top of the document body before any other interactive elements.
 */
export function SkipToContent() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:inline-flex focus:items-center focus:gap-2 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-extrabold focus:text-primary-foreground focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/40"
    >
      Skip to main content
    </a>
  );
}
