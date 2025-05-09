export default function ProductItem() {
    return (
        <div className="w-full max-w-xs h-auto rounded-2xl shadow-md flex flex-col items-center justify-center p-4 bg-white">
            <img
                src="src/assets/images/product.jpg"
                alt="product"
                className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-bold mb-3">جوراب جردن مشکی</h3>
                <div className="flex items-center justify-between gap-4 w-full">
                    <p className="text-base font-semibold text-gray-700">100000 تومان</p>
                    <button className="bg-red-700 text-white w-10 h-10 flex items-center justify-center rounded-full">
                        <img src="src/assets/images/plus.svg" alt="Add" className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}