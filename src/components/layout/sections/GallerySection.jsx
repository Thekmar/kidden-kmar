const galleryImages = [
  "/assets/images/cards/card-carousels3.jpg",
  "/assets/images/cards/card-carousels4.jpg",
  "/assets/images/cards/card-carousels5.jpg",
  "/assets/images/cards/card-carousels6.jpg",
  "/assets/images/cards/card-carousels7.jpg",
  "/assets/images/cards/card-carousels4.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-yellow-50 py-20 px-6 max-w-7xl mx-auto rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <div className="text-orange-600 font-bold text-xl mb-4">
            Learning Is An Adventure!
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-poppins text-gray-900 mb-4 leading-tight">
            Guiding Little Feet On Big Journeys!
          </h1>
          {/* Add yellow underline highlight if you like */}
          <div className="w-60 h-2 bg-yellow-500 mt-[-26px] rounded-full"></div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <p className="text-lg text-gray-600 mb-8">
            Kindergarten is an early childhood educational environment where
            most young children engage in foundational learning experiences.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-7 rounded-lg shadow-lg transition">
            View All Programs
          </button>
        </div>
      </div>

      <h2 className="text-4xl font-poppins font-extrabold text-yellow-700 text-center mb-12"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
