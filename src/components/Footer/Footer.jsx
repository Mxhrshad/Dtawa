export default function Footer() {
  return (
    <div
      className="w-full h-60 text-white flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-red-800 mt-16"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center px-8">
        <div className="text-2xl font-dtawa mb-4 md:mb-0">Dtawa</div>
        <div className="flex flex-wrap gap-6 justify-center">
          <a href="/aboutus" className="hover:underline hover:text-gray-300 transition-colors duration-300">
            درباره ما
          </a>
          <a href="/" className="hover:underline hover:text-gray-300 transition-colors duration-300">
            خانه
          </a>
          <a href="/shop" className="hover:underline hover:text-gray-300 transition-colors duration-300">
            خرید
          </a>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <a href="https://instagram.com/dtawashop" target="_blank" rel="noopener noreferrer">
          <img
            src="../../src/assets/images/instagram-icon.svg"
            alt="Instagram"
            className="w-6 h-6 hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
      <div className="mt-4 text-sm text-center">
        © 2025 Dtawa. تمامی حقوق محفوظ است.
      </div>
    </div>
  );
}