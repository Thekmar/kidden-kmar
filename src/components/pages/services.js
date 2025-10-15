import Head from "next/head";
import ServicesSection from "../layout/sections/ServicesSection";

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Kidden</title>
        <meta
          name="description"
          content="Discover the range of services offered at Kidden Kindergarten."
        />
      </Head>
      <main>
        <ServicesSection />
      </main>
    </>
  );
}
