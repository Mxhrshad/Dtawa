import HeroArea from "../HeroArea/HeroArea";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div
      className="w-full bg-gradient-to-r from-red-600 to-red-800 h-[400px] sm:h-[400px] md:h-[500px] lg:h-[500px]"
    >
      <Navbar />

      <div className="flex flex-col items-center justify-center h-full text-white animate-fade-in">
        <HeroArea />
      </div>
    </div>
  );
}