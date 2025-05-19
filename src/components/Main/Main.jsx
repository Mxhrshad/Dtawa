import { useEffect, useState } from "react";
import { getKeychains, getSocks } from "../../services/api";
import ProductSection from "../ProductSection/ProductSection";

export default function Main() {
  const [keychains, setKeychains] = useState([]);
  const [socks, setSocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const keychainData = await getKeychains();
        const socksData = await getSocks();

        setKeychains(keychainData.slice(-4));
        setSocks(socksData.slice(-4));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">در حال بارگذاری...</p>;
  }


  const combinedProducts = [
    ...keychains.slice(-2),
    ...socks.slice(-2),
  ];

  return (
    <div className="flex flex-col items-center w-full h-full px-4 md:px-10 lg:px-20 mt-10">

      {/* Combined Section */}
      <ProductSection
        title="محصولات ترکیبی"
        products={combinedProducts}
      />

      {/* Keychains Section */}
      <ProductSection
        title="جدیدترین جاسوییچی‌ها"
        products={keychains}
        link="/shop/keychains"
      />

      {/* Socks Section */}
      <ProductSection
        title="جدیدترین جوراب‌ها"
        products={socks}
        link="/shop/socks"
      />
    </div>
  );
}