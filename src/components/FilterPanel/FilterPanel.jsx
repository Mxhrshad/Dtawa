import { useState } from "react";

export default function FilterPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex justify-center align-center">
      {/* Menu Button for Small Screens */}
      <div className="flex items-center justify-center h-[70px]">
            <button
            onClick={togglePanel}
            className="block lg:hidden bg-red-600 text-white px-2 py-1 text-sm rounded-md hover:bg-red-700 transition-colors duration-300"
        >
            فیلتر محصولات
        </button>
      </div>

      {/* Filter Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg p-4 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:static lg:translate-x-0 lg:w-full lg:shadow-none`}
        dir="rtl"
      >
        <h2 className="text-lg font-bold text-gray-700 mb-4">فیلتر محصولات</h2>

        {/* Close Button for Small Screens */}
        <button
          onClick={togglePanel}
          className="block lg:hidden text-gray-500 hover:text-gray-700 mb-4"
        >
          ✕ بستن
        </button>

        {/* Adult/Children Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">نوع</h3>
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox text-red-600" />
              بزرگسال
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox text-red-600" />
              کودکان
            </label>
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">رنگ</h3>
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox text-red-600" />
              قرمز
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox text-red-600" />
              آبی
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox text-red-600" />
              مشکی
            </label>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">محدوده قیمت</h3>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="حداقل"
              className="w-20 border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-600"
            />
            <span className="text-sm text-gray-500">تا</span>
            <input
              type="number"
              placeholder="حداکثر"
              className="w-20 border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-600"
            />
          </div>
        </div>

        {/* Sort Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">ترتیب</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="radio" name="sort" className="form-radio text-red-600" />
              جدیدترین
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="radio" name="sort" className="form-radio text-red-600" />
              گران‌ترین
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="radio" name="sort" className="form-radio text-red-600" />
              ارزان‌ترین
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="radio" name="sort" className="form-radio text-red-600" />
              دارای تخفیف
            </label>
          </div>
        </div>

        {/* Apply Button */}
        <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
}