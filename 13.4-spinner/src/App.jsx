import "./App.css";
import Spinner from "./Spinner";

function App() {
  const randomBox = Math.ceil(Math.random() * 3);
  return (
    <>
      {randomBox === 1 && <Spinner color={`black`} />}
      {randomBox === 2 && <Spinner color={`green`} />}
      {randomBox === 3 && <Spinner color={`gold`} />}
    </>
  );
}

export default App;
