import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductSection({ title, link }) {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
    <section className="w-full mb-16 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-black text-center mb-6 animate-slide-down">{title}</h2>
      <hr className="w-full h-1 my-5 animate-fade-in" />
      {link && (
        <Link to={link} onClick={handleLinkClick}>
          <p className="w-full flex justify-end mb-4 font-bold text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer animate-fade-in">
            دیدن همه محصولات
          </p>
        </Link>
      )}
      <div className="w-full overflow-x-auto" style={{ direction: "rtl" }}>
        {/* Add padding to prevent hover overflow */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 py-4 pr-6 sm:pr-8 lg:pr-16 pl-12 sm:pl-16 lg:pl-20">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </section>
  );
}