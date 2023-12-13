import { getData } from "../../Contexts/DataContext";
import "./DataPage.css";
import { Link } from "react-router-dom";

export default function DataPage() {
  const { data } = getData();

  return (
    <main className="DataPage">
      <h1>Looking for an Animal?</h1>
      <Link to={"/animals"}>
        <button>CLICK HERE</button>
      </Link>
    </main>
  );
}
