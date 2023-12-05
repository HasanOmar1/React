import { useState, useEffect } from "react";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setFetchedData(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const cards = () => {
    return fetchedData.map((data, i) => {
      return (
        <Card
          key={i}
          name={data.name.first}
          lastName={data.name.last}
          img={data.picture.large}
        />
      );
    });
  };

  return (
    <>
      <Input />
      <div className="container">{cards()}</div>
    </>
  );
}

export default App;
