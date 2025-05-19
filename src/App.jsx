import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Socks from "./pages/Socks/Socks";
import Keychains from "./pages/Keychains/Keychains";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/socks" element={<Socks />} />
      <Route path="/shop/socks/:page" element={<Socks />} />
      <Route path="/shop/keychains" element={<Keychains />} />
      <Route path="/shop/keychains/:page" element={<Keychains />} />
    </Routes>
  );
}

export default App;