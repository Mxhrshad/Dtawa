import ShopHeader from "../../components/ShopHeader/ShopHeader";
import ShopMain from "../../components/ShopMain/ShopMain";
import Footer from "../../components/Footer/Footer";

export default function Shop() {
  return (
    <div className="h-[1000px]">
      <ShopHeader />
      <ShopMain />
      <Footer />
    </div>
  );
}