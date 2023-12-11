import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axiosConfig";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import DataPage from "./Pages/DataPage/DataPage";

function App() {
  //read = get
  //create = post
  //put = update
  //delete = delete

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} exact element={<DataPage />} />
      </Routes>
    </>
  );
}

export default App;
