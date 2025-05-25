import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductSection({ title, link, products = [] }) {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full mb-16 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-black text-center mb-6 animate-slide-down">
        {title}
      </h2>
      <hr className="w-full h-1 my-5 animate-fade-in" />
      {link && (
        <Link to={link} onClick={handleLinkClick}>
          <p className="w-full flex justify-end mb-4 font-bold text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer animate-fade-in">
            دیدن همه محصولات
          </p>
        </Link>
      )}
      <div className="w-full overflow-x-auto" style={{ direction: "rtl" }}>
        <div
          className="flex justify-start items-center gap-6 sm:gap-8 py-4 px-4 sm:px-8 lg:px-16"
        >
          {products.length > 0 ? (
            products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                image={product.image}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">محصولی برای نمایش وجود ندارد</p>
          )}
        </div>
      </div>
    </section>
  );
}