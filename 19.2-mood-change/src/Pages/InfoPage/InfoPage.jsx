import React from "react";
import { useThemeContext } from "../../Contexts/ThemeContext";
import "./InfoPage.css";
import Timer from "../../components/Timer/Timer";
import AnimalPage from "../AnimalPage/AnimalPage";
import { useChangePage } from "../../Contexts/ChangePageContext";
export default function InfoPage() {
  const { theme } = useThemeContext();
  const { changePage } = useChangePage();

  return (
    <main className={`InfoPage ${theme === "dark" ? "dark" : "light"}`}>
      {/* <Timer /> */}
      <h1>Info Page</h1>
      <p>Hello , my name is Hasan and I love playing video games </p>
      <button className="btns" onClick={() => changePage(`animal-page`)}>
        Go to Animal Page
      </button>
    </main>
  );
}
