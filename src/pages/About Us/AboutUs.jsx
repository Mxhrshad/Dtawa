import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function AboutUs() {
  return (
    <div className="h-auto min-h-screen flex flex-col bg-gradient-to-r from-red-600 to-red-800 text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center p-6">
        {/* Logo Section */}
        <img
          src="src/assets/images/Logo.png"
          alt="logo"
          className="w-full md:w-1/3 max-w-xs mb-6 md:mb-0 md:mr-8"
        />

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-right">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">درباره دتاوا</h1>
          <p className="text-lg leading-relaxed">
            کلمه "دتاوا" در زبان گیلکی به معنای "درخشان" است. این نام نشان‌دهنده
            هدف ما برای ارائه خدمات و محصولات درخشان و با کیفیت به مشتریان عزیز
            است. وب‌سایت ما به عنوان یک فروشگاه آنلاین طراحی شده است تا تجربه‌ای
            آسان و لذت‌بخش از خرید محصولات متنوع را برای شما فراهم کند
          </p>
          <p className="text-lg leading-relaxed mt-4">
            در دتاوا، ما به ارائه محصولات با کیفیت بالا و طراحی‌های منحصر به فرد
            افتخار می‌کنیم. هدف ما ایجاد یک تجربه خرید آنلاین ساده، سریع و
            مطمئن برای مشتریان است. از محصولات متنوع ما دیدن کنید و از خرید خود
            لذت ببرید
          </p>
        </div>
      </div>
    <Footer />
    </div>
  );
}