import { useLocation, Link } from "react-router-dom";
import "./ProductsPage.css";
export default function ProductsPage() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="ProductsPage">
      <h4>{location.state.product.title}</h4>
      <h4>Size: {location.state.product.size}</h4>
      <img
        src={location.state.product.imageUrl}
        alt={location.state.product.title}
      />
      <h4>Price : {location.state.product.price}</h4>
      <h2>
        <Link style={{ color: "yellow" }} to={-1}>
          Back
        </Link>
      </h2>
    </div>
  );
}
