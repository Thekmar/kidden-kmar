import Head from 'next/head';

const images = [
  '/assets/images/cards/card-carousels3.jpg',
  '/assets/images/cards/card-carousels4.jpg',
  '/assets/images/cards/card-carousels5.jpg',
  '/assets/images/cards/card-carousels6.jpg',
  '/assets/images/cards/card-carousels7.jpg',
];

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - Kidden</title>
        <meta name="description" content="Photo gallery of Kidden Kindergarten activities and happy learners." />
      </Head>
      <main className="bg-yellow-50 min-h-screen w-full px-4 py-20 max-w-7xl mx-auto">
        <h1 className="text-5xl font-poppins font-extrabold text-center text-yellow-700 mb-16">Our Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
              <img src={src} alt={`Gallery image ${idx + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
