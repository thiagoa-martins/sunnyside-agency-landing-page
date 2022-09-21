import "./header.css";
import Head from "../../objects/head/head";
import TitleMain from "../../components/titleMain/titleMain";
import ArrowDown from "../../components/arrowDown/arrowDown";

const handleHeader = (event) => {
  const nav = document.querySelector(".nav");

  const classNameOfClickedElement = event.target.classList[0];

  if (classNameOfClickedElement === "icon-hamburger") {
    nav.style.display = "flex";
  }
};

const Header = () => {
  return (
    <header className="header" id="header" onClick={handleHeader}>
      <div className="container">
        <Head />

        <TitleMain />
        <ArrowDown />
      </div>
    </header>
  );
};

export default Header;
