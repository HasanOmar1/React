import { useEffect, useState } from "react";
import "./Timer.css";
import { useThemeContext } from "../../Contexts/ThemeContext";
export default function Timer() {
  const [secondsPassed, setSecondsPassed] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSecondsPassed((oldTime) => oldTime + 1);
    }, 1000);
  }, []);

  const { theme, changeTheme } = useThemeContext();
  return (
    <div className={`timer-container ${theme === "dark" ? "dark" : "light"}`}>
      <p>Time Elapsed : {secondsPassed} seconds </p>
      <label id="theme-label">{theme}</label>
      <input type="checkbox" onClick={changeTheme} />
    </div>
  );
}
