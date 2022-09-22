import "./styles/settings/colors.css";
import "./styles/settings/fonts.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import Header from "./objects/header/header";
import Services from "./objects/services/services";
import Projects from "./objects/projects/projects";
import Testimonials from "./objects/testimonials/testimonials";
import Footer from "./objects/footer/footer";

const handleMenu = (event) => {
  const nav = document.querySelector(".nav");
  const classNameOfClickedElement = event.target.classList[0];

  const classNames = ["nav", "section", "button", "icon-hamburger", "menu"];

  const shouldCloseNav = classNames.some(
    (className) => className === classNameOfClickedElement
  );
  
  if (classNameOfClickedElement === "icon-hamburger") {
    nav.classList.toggle("open");
  }

  if (!shouldCloseNav) {
    nav.classList.remove("open");
  }
};

function App() {
  return (
    <div onClick={handleMenu}>
      <Header />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
