import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="Header">
      <h3>
        <Link to={"/"} className="link">
          Home
        </Link>
      </h3>
      <h3>
        <Link to={"/products"} className="link">
          Products
        </Link>
      </h3>
    </nav>
  );
}
