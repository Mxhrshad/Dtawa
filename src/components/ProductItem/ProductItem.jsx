export default function ProductItem() {
  return (
    <div className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto rounded-2xl shadow-md flex flex-col items-center justify-center p-4 bg-white hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <img
        src="src/assets/images/product.jpg"
        alt="product"
        className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-2xl mb-4 hover:opacity-90 transition-opacity duration-300"
      />

      {/* Product Details */}
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-sm sm:text-base md:text-lg font-bold mb-3">جوراب جردن مشکی</h3>
        <div className="flex items-center justify-between gap-4 w-full">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">100000 تومان</p>
          <button className="bg-red-700 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md sm:rounded-lg hover:bg-red-800 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}