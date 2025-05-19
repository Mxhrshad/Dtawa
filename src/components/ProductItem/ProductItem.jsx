export default function ProductItem({ name, price, image }) {
  return (
    <div className="h-auto rounded-xl shadow-md flex flex-col items-center justify-center p-2 sm:p-4 bg-white hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-xl overflow-hidden mb-3 sm:mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-xs sm:text-sm md:text-base font-bold mb-2 sm:mb-3">
          {name}
        </h3>
        <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
            {price}
          </p>
          <button className="bg-red-700 text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-md sm:rounded-lg hover:bg-red-800 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}