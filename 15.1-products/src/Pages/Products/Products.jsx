import "./Products.css";
import items from "../../store";
import { Link } from "react-router-dom";
import pagesArr from "../../pages";
export default function Products() {
  const [home, productPage] = pagesArr;
  console.log(items);
  return (
    <main className="Products">
      <h1 className="page-title">Products</h1>
      <div className="product-names">
        {items.map((product) => {
          return (
            <Link
              className="links"
              key={product.id}
              to={`${productPage}/${product.id}`}
              state={{ product }}
            >
              <h3>{product.title}</h3>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
