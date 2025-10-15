export default function Button({ children, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition font-poppins font-semibold ${className}`}
    >
      {children}
    </button>
  );
}
