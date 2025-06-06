import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getKeychains, getSocks } from "../../services/api";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const keychains = await getKeychains();
        const socks = await getSocks();

        const allProducts = [...keychains, ...socks];
        const foundProduct = allProducts.find((item) => item.id === id);

        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600 animate-pulse">
          در حال بارگذاری...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">
          محصولی یافت نشد
        </p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />

      <div
        className="flex flex-col lg:flex-row items-center justify-between w-full h-full p-6 gap-8"
        style={{ direction: "rtl" }}
      >

        <div className="w-full lg:w-1/2 h-[50vh] overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 text-right">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            قیمت: {product.price}
          </p>
          {product.discount && (
            <p className="text-2xl font-semibold text-red-500 mb-4">
              قیمت با تخفیف: {product["discount-price"]}
            </p>
          )}
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            این محصول یکی از بهترین محصولات ما است که با کیفیت بالا و طراحی
            منحصر به فرد ارائه می‌شود. برای اطلاعات بیشتر، لطفاً با ما تماس
            بگیرید.
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}