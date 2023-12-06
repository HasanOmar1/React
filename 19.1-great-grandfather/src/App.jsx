import "./App.css";
import GiftProvider from "./components/GiftContext";
import Grandfather from "./components/GrandFather";

function App() {
  return (
    <GiftProvider>
      <Grandfather />
    </GiftProvider>
  );
}

export default App;
