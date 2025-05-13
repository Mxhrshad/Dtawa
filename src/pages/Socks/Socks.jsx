import { useParams, useNavigate } from "react-router-dom";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Shop from "../../components/Shop/Shop";
import Footer from "../../components/Footer/Footer";

export default function Socks() {
  const { page } = useParams();
  const navigate = useNavigate();

  const currentPage = parseInt(page, 10) || 1; // Default to page 1
  const itemsPerPage = 12;

  // Generate 24 products
  const products = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `${(index + 1) * 1000} تومان`,
  }));

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get products for the current page
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    navigate(`/shop/socks/${page}`); // Update the URL with the selected page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  return (
    <div className="w-full h-auto animate-fade-in">
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        {/* Searchbar */}
        <div className="col-span-12 lg:col-span-9 animate-slide-in-left">
          <Searchbar />
        </div>

        {/* Filter Panel */}
        <div className="col-span-12 lg:col-span-3 row-span-2 animate-slide-in-right">
          <FilterPanel />
        </div>

        {/* Shop */}
        <div className="col-span-12 lg:col-span-9 animate-fade-in">
          <Shop products={currentProducts} />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors duration-300`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}
