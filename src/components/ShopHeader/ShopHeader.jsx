import Navbar from "../Navbar/Navbar";
import Slide from "../Slide/Slide";

export default function ShopHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-red-600 to-red-800 h-[500px] sm:h-[500px] md:h-[600px] lg:h-[600px] flex flex-col pb-6 animate-fade-in">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-3xl font-bold text-white text-center mb-4 animate-slide-down">
          از محصولات جدید مجموعه دتاوا دیدن کنید
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-center animate-fade-in">
        <Slide />
      </div>
    </div>
  );
}