import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axiosConfig";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);

  //read = get
  //create = post
  //put = update
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

  async function deleteItem(id) {
    try {
      const response = axios.delete("/animals/" + id);
      fetchData();
    } catch (error) {
      console.log(`Could not delete ITEM `, error);
    }
  }
  async function updateItem(id) {
    try {
      const response = axios.put("/animals/" + id);
      fetchData();
    } catch (error) {
      console.log(`Could not delete ITEM `, error);
    }
  }

  return (
    <DataContext.Provider value={{ data, deleteItem, updateItem }}>
      {children}
    </DataContext.Provider>
  );
}

export const getData = () => useContext(DataContext);
