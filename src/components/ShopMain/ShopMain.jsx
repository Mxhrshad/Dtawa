import ProductSection from "../ProductSection/ProductSection";

export default function ShopMain({ socks, keychains }) {
  return (
    <div className="flex flex-col items-center w-full h-full px-4 md:px-10 lg:px-20 mt-10 animate-fade-in">
      {/* Socks Section */}
      <ProductSection
        title="جوراب ها"
        link="/shop/socks"
        products={socks.slice(0, 4)} // Limit to 4 products
      />

      {/* Keychains Section */}
      <ProductSection
        title="جاسوییچی ها"
        link="/shop/keychains"
        products={keychains.slice(0, 4)} // Limit to 4 products
      />
    </div>
  );
}