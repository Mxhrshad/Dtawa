import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow flex flex-col items-center w-full p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
          سبد خرید
        </h1>

        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-right">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-2 sm:px-4 py-2">محصول</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2">قیمت</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2">تعداد</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2">مجموع</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg"
                      />
                      <span className="text-sm sm:text-base break-words max-w-[150px] sm:max-w-none">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base whitespace-nowrap">
                    {item.price}
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base whitespace-nowrap">
                    {item.quantity * parseInt(item.price.replace(/,/g, ""))} تومان
                  </td>
                  <td className="border border-gray-300 px-2 sm:px-4 py-2 text-sm sm:text-base">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {cart.length === 0 && (
          <p className="text-gray-500 text-center mt-6">
            سبد خرید شما خالی است.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}