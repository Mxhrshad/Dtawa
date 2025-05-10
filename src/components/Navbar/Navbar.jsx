import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full text-white">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-dtawa hover:scale-110 transition-transform duration-300 mb-4 md:mb-0"
        >
          Dtawa
        </Link>

        {/* Links and Shopping Cart */}
        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end w-full md:w-auto">
          <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
            خانه
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors duration-300">
            درباره ما
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors duration-300">
            ارتباط با ما
          </Link>
          <Link to="/shop" className="hover:text-gray-300 transition-colors duration-300">
            خرید
          </Link>

          {/* Shopping Cart */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-10 h-10 text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            <img
              src="src\assets\images\shopping-cart.svg"
              alt="Shopping Cart"
              className="w-8 h-8"
            />
            {/* Cart Item Count */}
            <span className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}