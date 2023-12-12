import "./App.css";
import Box from "./Box";
import Boxes from "./Boxes";

function App() {
  return (
    <>
      <Box width={100} height={100} color={"green"} />
      <Box width={90} height={90} color={"red"} />
      <Box width={80} height={80} color={"yellow"} />
      <Box width={70} height={70} color={"black"} />
      <Boxes />
    </>
  );
}

export default App;
