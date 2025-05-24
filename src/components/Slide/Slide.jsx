import { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default function Slide({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden animate-fade-in">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-full flex items-center justify-center overflow-hidden animate-slide-left"
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden p-2">
              <ProductItem
                name={product.title}
                price={product.price}
                image={product.image}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:px-3 md:py-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-fade-in"
        onClick={previousSlide}
      >
        <img src="images/left-arrow.svg" alt="" />
      </button>

      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-gray-800 w-8 h-8 sm:w-10 sm:h-10 md:px-3 md:py-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-fade-in"
        onClick={nextSlide}
      >
        <img src="images/right-arrow.svg" alt="" />
      </button>

      <div className="flex justify-center items-center gap-2 mt-4">
        {products.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-red-600" : "bg-gray-300"
            } animate-fade-in`}
          ></span>
        ))}
      </div>
    </div>
  );
}