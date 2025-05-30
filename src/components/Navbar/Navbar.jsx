import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar({ hasBackground }) {
  const { cart } = useCart();


  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="w-full text-white bg-gradient-to-r from-red-600 to-red-800">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-4">
        <Link
          to="/"
          className="text-xl sm:text-2xl font-dtawa hover:scale-110 transition-transform duration-300 mb-4 md:mb-0"
        >
          Dtawa
        </Link>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center md:justify-end w-full md:w-auto">
          <Link to="/aboutus" className="hover:text-gray-300 transition-colors duration-300">
            درباره ما
          </Link>
          <Link to="/shop" className="hover:text-gray-300 transition-colors duration-300">
            خرید
          </Link>
          <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
            خانه
          </Link>

          <Link
            to="/cart"
            className="relative flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            <img
              src="/images/shopping-cart.svg"
              alt="Shopping Cart"
              className="w-6 sm:w-8 h-6 sm:h-8"
            />

            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 w-4 sm:w-5 h-4 sm:h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}