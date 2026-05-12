import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { MascotIntroSection } from "@/components/sections/MascotIntroSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { MomentsSection } from "@/components/sections/MomentsSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="flex w-full flex-col selection:bg-primary/30 selection:text-foreground"
      >
        <PageTransition className="flex w-full flex-col page-transition">
          <HeroSection />
          <TrustBadges />
          <MascotIntroSection />
          <CurriculumSection />
          <GallerySection />
          <MomentsSection />
          <InvestmentSection />
          <SocialProofSection />
          <FAQSection />
          <LocationSection />
          <ContactSection />
          <CTASection />
        </PageTransition>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
