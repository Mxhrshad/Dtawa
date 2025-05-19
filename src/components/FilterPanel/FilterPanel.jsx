import { useState } from "react";

export default function FilterPanel({ onFilterChange, showTypeFilter = true }) {
  const [type, setType] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sort, setSort] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    setType((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (e) => setSort(e.target.value);

  const applyFilters = () => {
    onFilterChange({ type, priceRange, sort });
    setIsVisible(false); // Hide the filter panel after applying filters
  };

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="w-full">
      {/* Toggle Button for Small Screens */}
      <div className="flex items-center justify-center h-[70px] lg:hidden">
        <button
          onClick={toggleVisibility}
          className="bg-red-600 text-white px-2 py-1 text-sm rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          {isVisible ? "بستن فیلتر" : "اعمال فیلتر"}
        </button>
      </div>

      {/* Filter Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg p-4 z-50 transition-transform duration-300 lg:static lg:w-full lg:shadow-none ${
          isVisible ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0`}
        dir="rtl"
      >
        <h2 className="text-lg font-bold text-gray-700 mb-4">فیلتر محصولات</h2>

        {/* Type Filter (conditionally rendered) */}
        {showTypeFilter && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">نوع</h3>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  value="children"
                  onChange={handleTypeChange}
                  className="form-checkbox text-red-600"
                />
                کودکان
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  value="adult"
                  onChange={handleTypeChange}
                  className="form-checkbox text-red-600"
                />
                بزرگسالان
              </label>
            </div>
          </div>
        )}

        {/* Price Range Filter */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">محدوده قیمت</h3>
          <div className="flex items-center gap-2">
            <input
              type="number"
              name="min"
              value={priceRange.min}
              onChange={handlePriceChange}
              placeholder="حداقل"
              className="w-20 border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-600"
            />
            <span className="text-sm text-gray-500">تا</span>
            <input
              type="number"
              name="max"
              value={priceRange.max}
              onChange={handlePriceChange}
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
              <input
                type="radio"
                name="sort"
                value="newest"
                onChange={handleSortChange}
                className="form-radio text-red-600"
              />
              جدیدترین
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="radio"
                name="sort"
                value="expensive"
                onChange={handleSortChange}
                className="form-radio text-red-600"
              />
              گران‌ترین
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="radio"
                name="sort"
                value="cheap"
                onChange={handleSortChange}
                className="form-radio text-red-600"
              />
              ارزان‌ترین
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="radio"
                name="sort"
                value="discount"
                onChange={handleSortChange}
                className="form-radio text-red-600"
              />
              دارای تخفیف
            </label>
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={applyFilters}
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          اعمال فیلتر
        </button>

        {/* Close Button for Small Screens */}
        <div className="lg:hidden mt-4">
          <button
            onClick={toggleVisibility}
            className="w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300"
          >
            بستن فیلتر
          </button>
        </div>
      </div>
    </div>
  );
}