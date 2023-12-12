import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link to={"/"} className="link">
        <h3>home</h3>
      </Link>
      <Link to={"/animals"} className="link">
        <h3>Animals</h3>
      </Link>
    </div>
  );
}
