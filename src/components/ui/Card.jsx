export default function Card({ image, title, description, className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-poppins text-xl font-bold text-primary-600 mb-2">{title}</h3>
        <p className="text-gray-700 font-comic">{description}</p>
      </div>
    </div>
  );
}
