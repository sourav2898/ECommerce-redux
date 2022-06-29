import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./screens/ProductList";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Search from "./screens/Search";

function App() {
  return (
    <Box height="100vh" overflow="hidden">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/details/:id" element={<ProductDetails />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/search" element={<Search />} />
          <Route path="*" element={<ProductList />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
