import ProductItem from "../ProductItem/ProductItem";

export default function Main() {
  return (
    <div className="flex flex-col items-center w-full h-full px-4 md:px-10 lg:px-20 mt-10">

      <section className="w-full mb-16 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-6">جدیدترین محصولات</h2>
        <hr className="w-full h-1 my-5" />
        <p className="w-full flex justify-end mb-4 font-bold text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer">
          دیدن همه محصولات
        </p>
        <div className="w-full overflow-x-auto" style={{ direction: "rtl" }}>
          <div className="flex gap-6 sm:gap-8 py-4">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </section>

      <section className="w-full mb-16 animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-6">جوراب</h2>
        <hr className="w-full h-1 my-5" />
        <p className="w-full flex justify-end mb-4 font-bold text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer">
          دیدن همه محصولات
        </p>
        <div className="w-full overflow-x-auto" style={{ direction: "rtl" }}>
          <div className="flex gap-6 sm:gap-8 py-4">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </section>

      <section className="w-full animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-6">جاسوییچی</h2>
        <hr className="w-full h-1 my-5" />
        <p className="w-full flex justify-end mb-4 font-bold text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer">
          دیدن همه محصولات
        </p>
        <div className="w-full overflow-x-auto" style={{ direction: "rtl" }}>
          <div className="flex gap-6 sm:gap-8 py-4">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </section>
    </div>
  );
}