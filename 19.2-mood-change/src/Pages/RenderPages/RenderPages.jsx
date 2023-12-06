import { useChangePage } from "../../Contexts/ChangePageContext";
import { useThemeContext } from "../../Contexts/ThemeContext";
import Timer from "../../components/Timer/Timer";
import AnimalPage from "../AnimalPage/AnimalPage";
import ContactPage from "../ContactPage/ContactPage";
import InfoPage from "../InfoPage/InfoPage";
import "./RenderPages.css";

export default function RenderPages() {
  const { theme } = useThemeContext();
  const { currentPage } = useChangePage();

  return (
    <main className={`page-container ${theme === "dark" ? "dark" : "light"}`}>
      <Timer />
      <section>
        {currentPage === `info-page` && <InfoPage />}
        {currentPage === `animal-page` && <AnimalPage />}
        {currentPage === `contact-page` && <ContactPage />}
      </section>
    </main>
  );
}
