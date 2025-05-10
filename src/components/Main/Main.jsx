import ProductItem from "../ProductItem/ProductItem";

export default function Main() {
  return (
    <div className="flex flex-col items-center w-full h-full px-30 mt-10">
        <h2 className="text-2xl font-black">جدیدترین محصولات</h2>
        <hr className="w-full h-1 my-5" />
        <p className="w-full flex justify-end mb-2 font-bold text-gray-500">دیدن همه محصولات</p>
        <div className="grid grid-cols-4 grid-rows-1 gap-20 mb-10">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>

        <h2 className="text-2xl font-black">جوراب</h2>
        <hr className="w-full h-1 my-5" />
        <p className="w-full flex justify-end mb-2 font-bold text-gray-500">دیدن همه محصولات</p>
        <div className="grid grid-cols-4 grid-rows-1 gap-20 mb-10">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>

        <h2 className="text-2xl font-black">جاسوییچی</h2>
        <hr className="w-full h-1 my-5" />
        <p className="w-full flex justify-end mb-2 font-bold text-gray-500">دیدن همه محصولات</p>
        <div className="grid grid-cols-4 grid-rows-1 gap-20 mb-10">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    </div>
  );
}