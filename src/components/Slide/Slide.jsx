import { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";

export function Slide() {
  const products = Array.from({ length: 5 }, (_, index) => <ProductItem key={index} />);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Automatically switch slides every 3 seconds (LTR)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically move to the next slide
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [products.length]);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex items-center justify-center overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden p-2">
              {product}
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:px-3 md:py-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        onClick={previousSlide}
      >
        <img src="src\assets\images\left-arrow.svg" alt="" />
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:px-3 md:py-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        onClick={nextSlide}
      >
        <img src="src\assets\images\right-arrow.svg" alt="" />
      </button>

      {/* Dots Indicators */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {products.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)} // Navigate to the corresponding slide
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-red-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slide;