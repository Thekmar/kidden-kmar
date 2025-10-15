import Head from 'next/head';
import AboutSection from '../components/layout/sections/AboutSection';

export default function About() {
  return (
    <>
      <Head>
        <title>About Kidden</title>
        <meta name="description" content="Learn more about Kidden Kindergarten, our mission and team." />
      </Head>
      <main>
        <AboutSection />
      </main>
    </>
  );
}
