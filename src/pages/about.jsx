import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Kidden</title>
        <meta name="description" content="Learn about Kidden Kindergarten, our mission and team." />
      </Head>
      <main className="bg-pink-50 min-h-screen w-full px-4 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl font-poppins font-extrabold text-center text-pink-700 mb-12">About Kidden</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <img src="/assets/images/about/about-boy.jpg" alt="About Kidden" className="rounded-lg shadow-lg md:w-1/2 w-full object-cover" />
          <div className="md:w-1/2 w-full flex flex-col justify-center">
            <p className="text-lg font-comic text-pink-900 mb-6">
              At Kidden kindergarten, we nurture the creativity, curiosity, and individuality of every child. Our qualified teachers ensure your little ones get the best start in their education journey.
            </p>
            <blockquote className="italic font-bold text-pink-700 border-l-6 border-pink-500 pl-6 mb-4">
              Play is the work of childhood.
            </blockquote>
            <p className="text-lg font-comic text-pink-900">
              Join us to explore a place where learning is fun, safe, and inspiring.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
