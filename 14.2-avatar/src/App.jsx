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
    if (inputVal.length === 0) {
      setFetchedData(originalData);
    } else {
      const filteredNames = fetchedData.filter((data) => {
        return (
          data.name.first.toLowerCase().includes(inputVal.toLowerCase()) ||
          data.name.last.toLowerCase().includes(inputVal.toLowerCase())
        );
      });
      return setFetchedData(filteredNames);
    }
  }, [inputVal]);

  function handleOnChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <>
      <input type="text" value={inputVal} onChange={handleOnChange} />
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
