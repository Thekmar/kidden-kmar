export default function ContactSection() {
  return (
    <section className="bg-blue-50 py-16 px-6 max-w-lg mx-auto rounded-lg">
      <h2 className="text-3xl font-poppins font-extrabold text-blue-700 text-center mb-8">Contact Us</h2>
      <form className="flex flex-col space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-poppins font-semibold hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
      <address className="text-blue-900 font-comic text-center mt-10">
        <p>Email: <a href="mailto:info@kidden.com" className="underline">info@kidden.com</a></p>
        <p>Phone: +1 234 567 8910</p>
        <p>Address: 123 Kidden Lane, Happy Town</p>
      </address>
    </section>
  );
}
