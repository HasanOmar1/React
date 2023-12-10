import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Header from "./components/Header";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
