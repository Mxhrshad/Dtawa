import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Shop from "../../components/Shop/Shop";
import Footer from "../../components/Footer/Footer";
import { getSocks } from "../../services/api";

export default function Socks() {
  const { page } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentPage = parseInt(page, 10) || 1; // Default to page 1
  const itemsPerPage = 12;

  useEffect(() => {
    async function fetchData() {
      try {
        const socksData = await getSocks();
        setProducts(socksData); // Set the fetched socks data
        setFilteredProducts(socksData); // Initialize filtered products
      } catch (error) {
        console.error("Error fetching socks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filter products based on the search term
  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Apply filters from the FilterPanel
  const handleFilterChange = ({ type, priceRange, sort }) => {
    let filtered = [...products];

    // Filter by type
    if (type.includes("children")) {
      filtered = filtered.filter((product) => product.forkids === true);
    } else if (type.includes("adult")) {
      filtered = filtered.filter((product) => product.forkids !== true);
    }

    // Filter by price range
    if (priceRange.min || priceRange.max) {
      filtered = filtered.filter((product) => {
        const price = parseInt(product.price.replace(/,/g, ""), 10);
        return (
          (!priceRange.min || price >= priceRange.min) &&
          (!priceRange.max || price <= priceRange.max)
        );
      });
    }

    // Sort products
    if (sort === "newest") {
      filtered = filtered.sort((a, b) => b.id - a.id);
    } else if (sort === "expensive") {
      filtered = filtered.sort(
        (a, b) => parseInt(b.price.replace(/,/g, ""), 10) - parseInt(a.price.replace(/,/g, ""), 10)
      );
    } else if (sort === "cheap") {
      filtered = filtered.sort(
        (a, b) => parseInt(a.price.replace(/,/g, ""), 10) - parseInt(b.price.replace(/,/g, ""), 10)
      );
    } else if (sort === "discount") {
      filtered = filtered.filter((product) => product.discount);
    }

    setFilteredProducts(filtered);
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Get products for the current page
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    navigate(`/shop/socks/${page}`); // Update the URL with the selected page
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  if (loading) {
    return <p className="text-center">در حال بارگذاری...</p>;
  }

  return (
    <div className="w-full h-auto animate-fade-in">
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        {/* Searchbar */}
        <div className="col-span-12 lg:col-span-9 animate-slide-in-left">
          <Searchbar onSearch={handleSearch} />
        </div>

        {/* Filter Panel */}
        <div className="col-span-12 lg:col-span-3 row-span-2 animate-slide-in-right">
          <FilterPanel onFilterChange={handleFilterChange} />
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