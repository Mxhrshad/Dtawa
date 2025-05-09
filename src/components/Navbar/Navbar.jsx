import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="w-full h-1/6 px-9 grid grid-cols-6 grid-rows-1 gap-4 text-white">
        <Link to="/" className="font-dtawa text-3xl flex items-center justify-center">
          Dtawa
        </Link>
        <Link to="/contact" className="flex justify-center items-center">
          ارتباط با ما
        </Link>
        <Link to="/about" className="flex justify-center items-center">
          درباره ما
        </Link>
        <Link to="/shop" className="flex justify-center items-center">
          خرید
        </Link>
        <Link to="/" className="flex justify-center items-center">
          خانه
        </Link>
        <Link to="/shoppingCart" className="flex justify-center items-center">
          <img
            src="src/assets/images/shopping-basket-svgrepo-com 1.svg"
            className="w-10 h-10"
            alt=""
          />
        </Link>
      </div>
      <div></div>
    </>
  );
}