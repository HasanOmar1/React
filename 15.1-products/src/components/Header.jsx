import "./Header.css";
import { Link } from "react-router-dom";
import pagesArr from "../pages";

export default function Header() {
  const [home, productPage] = pagesArr;
  return (
    <nav className="Header">
      <h3>
        <Link to={home} className="link">
          Home
        </Link>
      </h3>
      <h3>
        <Link to={productPage} className="link">
          Products
        </Link>
      </h3>
    </nav>
  );
}
