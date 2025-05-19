import ProductItem from "../ProductItem/ProductItem";

export default function Shop({ products }) {
  return (
    <div className="w-full">
      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}