import HeroSection from "../src/components/layout/sections/HeroSection";
import AboutSection from "../src/components/layout/sections/AboutSection";
import ServicesSection from "../src/components/layout/sections/ServicesSection";
import TeamSection from "../src/components/layout/sections/TeamSection";
import TestimonialSection from "../src/components/layout/sections/TestimonialSection";
import GallerySection from "../src/components/layout/sections/GallerySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialSection />
      <GallerySection />
    </>
  );
}
