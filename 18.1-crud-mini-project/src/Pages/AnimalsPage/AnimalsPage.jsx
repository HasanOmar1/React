import { getData } from "../../Contexts/DataContext";
import "./AnimalsPage.css";
import { Link } from "react-router-dom";

export default function AnimalsPage() {
  const { data, deleteItem, updateItem, createItem } = getData();
  console.log(data);

  return (
    <div className="AnimalsPage">
      <button
        className="create"
        onClick={() => createItem(prompt("Enter Name"))}
      >
        Create new Item
      </button>
      {data.map((animals) => {
        return (
          <div key={animals.id} className="animals-container">
            <Link
              to={`/animals/${animals.id}`}
              state={{ animals }}
              className="link"
            >
              <h2>{animals.name}</h2>
            </Link>
            <button onClick={() => deleteItem(animals.id)} className="delete">
              DELETE
            </button>
            <button
              onClick={() =>
                updateItem(animals.id, prompt("Enter New Name", animals.name))
              }
              className="update"
            >
              UPDATE
            </button>
          </div>
        );
      })}
    </div>
  );
}
