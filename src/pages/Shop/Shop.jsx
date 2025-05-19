import { useEffect, useState } from "react";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import ShopMain from "../../components/ShopMain/ShopMain";
import Footer from "../../components/Footer/Footer";
import { getKeychains, getSocks } from "../../services/api";

export default function Shop() {
  const [slideProducts, setSlideProducts] = useState([]);
  const [socks, setSocks] = useState([]);
  const [keychains, setKeychains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const socksData = await getSocks();
        const keychainsData = await getKeychains();

        // Get 3 newest socks and 2 newest keychains for the slide
        const newestSocks = socksData.slice(-3);
        const newestKeychains = keychainsData.slice(-2);

        setSlideProducts([...newestSocks, ...newestKeychains]);

        // Set all socks and keychains for the main sections
        setSocks(socksData);
        setKeychains(keychainsData);
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

  return (
    <div className="h-[1000px]">
      <ShopHeader slideProducts={slideProducts} />
      <ShopMain socks={socks} keychains={keychains} />
      <Footer />
    </div>
  );
}