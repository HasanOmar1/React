import "./App.css";
import FullCircle from "./components/FullCircle";
import HalfCircle from "./components/HalfCircle";
import FullDots from "./components/FullDots";
import HalfDots from "./components/HalfDots";

function App() {
  const randomSpinner = Math.ceil(Math.random() * 4);
  return (
    <>
      {randomSpinner === 1 && <FullCircle />}
      {randomSpinner === 2 && <HalfCircle />}
      {randomSpinner === 3 && <FullDots />}
      {randomSpinner === 4 && <HalfDots />}
    </>
  );
}

export default App;
