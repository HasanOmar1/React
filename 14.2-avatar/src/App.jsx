import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setFetchedData(data.results);
        setOriginalData(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!inputVal) {
      setFetchedData(originalData);
    } else {
      const filteredNames = originalData.filter((data) => {
        return (
          data.name.first.toLowerCase().includes(inputVal.toLowerCase()) ||
          data.name.last.toLowerCase().includes(inputVal.toLowerCase())
        );
      });
      return setFetchedData(filteredNames);
    }
  }, [inputVal]);

  return (
    <>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <div className="container">
        {fetchedData.map((data, i) => {
          return (
            <Card
              key={i}
              name={data.name.first}
              lastName={data.name.last}
              img={data.picture.large}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
