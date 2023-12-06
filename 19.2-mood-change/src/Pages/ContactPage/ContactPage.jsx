import { useChangePage } from "../../Contexts/ChangePageContext";
import { useThemeContext } from "../../Contexts/ThemeContext";
import "./ContactPage.css";

export default function ContactPage() {
  const { theme } = useThemeContext();
  const { changePage } = useChangePage();
  return (
    <main className={`ContactPage ${theme === "dark" ? "dark" : "light"}`}>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" />

        <label htmlFor="Email">Email:</label>
        <input type="text" />

        <label htmlFor="Message">Message:</label>
        <textarea cols="30" rows="10"></textarea>
      </form>

      <button className="btns" onClick={() => changePage(`info-page`)}>
        Go to Info Page
      </button>
    </main>
  );
}
