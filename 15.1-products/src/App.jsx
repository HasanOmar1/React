import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Header from "./components/Header";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import pagesArr from "./pages";

function App() {
  const [home, productPage] = pagesArr;

  return (
    <>
      <Header />
      <Routes>
        <Route path={home} exact element={<Home />} />
        <Route path={productPage} element={<Products />} />
        <Route path={`${productPage}/:id`} element={<ProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
