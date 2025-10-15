import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Kidden</title>
        <meta name="description" content="Get in touch with Kidden Kindergarten." />
      </Head>
      <main className="bg-blue-50 min-h-screen w-full px-4 py-20 max-w-xl mx-auto">
        <h1 className="text-4xl font-poppins font-extrabold text-center text-blue-700 mb-12">Contact Us</h1>
        <form className="flex flex-col gap-6">
          <input type="text" name="name" placeholder="Name" required className="px-4 py-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" placeholder="Email" required className="px-4 py-3 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" rows="6" placeholder="Message" required className="px-4 py-3 border border-blue-400 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="bg-blue-600 text-white font-poppins font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
        </form>
        <address className="mt-12 text-center text-blue-900 font-comic">
          Email: <a href="mailto:info@kidden.com" className="underline">info@kidden.com</a><br />
          Phone: +1-234-567-8910<br />
          Address: 123 Kidden Lane, Happy Town
        </address>
      </main>
    </>
  );
}
