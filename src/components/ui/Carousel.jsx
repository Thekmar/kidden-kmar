import { useState } from 'react';

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className="w-full object-cover"
          style={{ height: '400px' }}
        />
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition"
          onClick={prevItem}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition"
          onClick={nextItem}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
