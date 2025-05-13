import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import ProductSection from "../ProductSection/ProductSection";

export default function Main() {
  return (
    <div className="flex flex-col items-center w-full h-full px-4 md:px-10 lg:px-20 mt-10">
                  <ProductSection title="جدیدترین محصولات" />

                  <ProductSection title="جوراب ها" link="shop/socks" />
      
                  <ProductSection title="جاسوییچی ها" link="shop/keychains" />
    </div>
  );
}