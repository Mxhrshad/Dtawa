export default function HeroArea() {
  return (
    <div className="w-full h-full flex flex-col items-center text-center px-4 animate-fade-in">
      {/* Logo */}
      <img
        src="src/assets/images/Logo.png"
        className="w-40 sm:w-40 md:w-48 lg:w-64 mb-4 hover:scale-110 transition-transform duration-300"
        alt="Logo"
      />

      {/* Welcome Text */}
      <h1 className="font-black text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-4">
        به سایت دتاوا خوش آمدید
      </h1>

      {/* Subtitle */}
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
        این جزئیات هستند که مارو مجذوب می‌کنند
      </p>
    </div>
  );
}