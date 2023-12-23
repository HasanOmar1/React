import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);

  //read = get
  //create = post
  //update = put
  //delete = delete

  async function fetchData() {
    try {
      const response = await axios.get("/animals");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function updateItem(id, newName) {
    try {
      const response = await axios.put(`/animals/${id}`, { name: newName });
      const updatedItem = response.data;

      setData((prevData) => {
        const newData = prevData.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
        return newData;
      });
    } catch (error) {
      console.log(`Could not UPDATE ITEM `, error);
    }
  }

  async function deleteItem(id) {
    try {
      const response = await axios.delete("/animals/" + id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(`Could not delete ITEM `, error);
    }
  }

  async function createItem(newName) {
    try {
      const response = await axios.post(`/animals`, {
        name: newName,
        avatar: `https://loremflickr.com/640/480/animals`,
      });
      setData([...data, response.data]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <DataContext.Provider value={{ data, deleteItem, updateItem, createItem }}>
      {children}
    </DataContext.Provider>
  );
}

export const getData = () => useContext(DataContext);
