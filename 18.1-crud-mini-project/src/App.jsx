import "./App.css";
import axios from "./axiosConfig";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import DataPage from "./Pages/DataPage/DataPage";
import AnimalsPage from "./Pages/AnimalsPage/AnimalsPage";
import AnimalsInfo from "./Pages/AnimalsInfo/AnimalsInfo";

function App() {
  //read = get
  //post = create
  //put = update
  //delete = delete

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} exact element={<DataPage />} />
        <Route path={"/animals"} element={<AnimalsPage />} />
        <Route path={"/animals/:id"} element={<AnimalsInfo />} />
      </Routes>
    </>
  );
}

export default App;
