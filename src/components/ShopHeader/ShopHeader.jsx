import Navbar from "../Navbar/Navbar";
import Slide from "../Slide/Slide";

export default function ShopHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-red-600 to-red-800 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[550px] flex flex-col">
      <Navbar />
      <h1 className="flex justify-center text-3xl font-bold text-white mb-4">از محصولات جدید مجموعه دتاوا دیدن کنید</h1>
      <div className="flex flex-1 items-center justify-center">
        <Slide />
      </div>
    </div>
  );
}