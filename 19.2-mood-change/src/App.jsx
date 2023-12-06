import "./App.css";
import { ThemeContextProvider } from "./Contexts/ThemeContext";
import ChangePageProvider from "./Contexts/ChangePageContext";
import RenderPages from "./Pages/RenderPages/RenderPages";

function App() {
  return (
    <ThemeContextProvider>
      <ChangePageProvider>
        <RenderPages />
      </ChangePageProvider>
    </ThemeContextProvider>
  );
}

export default App;
