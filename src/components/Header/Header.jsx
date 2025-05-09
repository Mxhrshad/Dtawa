import HeroArea from "../HeroArea/HeroArea";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div className="w-full"
      style={{
        height: '500px',
        background: 'linear-gradient(275deg,rgba(255, 34, 9, 1) 0%, rgba(153, 20, 6, 1) 67%)'}}
    >
        <Navbar />
        <HeroArea />
    </div>
  );
}