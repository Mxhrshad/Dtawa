export default function Footer() {
  return (
    <div
      className="w-full text-white flex flex-col items-center justify-center"
      style={{
        height: '15rem',
        background: 'linear-gradient(275deg, rgba(255, 34, 9, 1) 0%, rgba(153, 20, 6, 1) 67%)',
      }}
    >
      <div className="w-full max-w-6xl flex justify-between items-center px-8">

        <div className="text-2xl font-dtawa">Dtawa</div>

        <div className="flex gap-6">
          <a href="/" className="hover:underline">
            خانه
          </a>
          <a href="/about" className="hover:underline">
            درباره ما
          </a>
          <a href="/contact" className="hover:underline">
            ارتباط با ما
          </a>
          <a href="/shop" className="hover:underline">
            خرید
          </a>
        </div>
      </div>

    
      <div className="flex gap-4 mt-6">
        <a href="https://instagram.com/dtawashop" target="_blank" rel="noopener noreferrer">
          <img
            src="src/assets/images/instagram-icon.svg"
            alt="Instagram"
            className="w-6 h-6"
          />
        </a>
      </div>

      <div className="mt-4 text-sm">
        © 2025 Dtawa. تمامی حقوق محفوظ است.
      </div>
    </div>
  );
}