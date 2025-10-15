import Head from "next/head";
import HeroSection from "../layout/sections/HeroSection";
import AboutSection from "../layout/sections/AboutSection";
import ServicesSection from "../layout/sections/ServicesSection";
import TeamSection from "../layout/sections/TeamSection";
import TestimonialSection from "../layout/sections/TestimonialSection";
import GallerySection from "../layout/sections/GallerySection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kidden Kindergarten</title>
        <meta
          name="description"
          content="The safest and happiest kindergarten for your children."
        />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialSection />
        <GallerySection />
      </main>
    </>
  );
}
