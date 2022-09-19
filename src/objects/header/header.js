import "./header.css";
import Head from "../../objects/head/head";
import TitleMain from "../../components/titleMain/titleMain";
import ArrowDown from "../../components/arrowDown/arrowDown";
import Menu from "../../components/menu/menu";
import Button from "../../components/button/button";

const handleHeader = event => {
  const classNameOfClickedElement = event.target.classList[0];
  const nav = document.querySelector(".nav-mobile");

  if (classNameOfClickedElement === "icon-hamburger") {
    nav.style.display = "block";
  }
};

const Header = () => {
  return (
    <header className="header" id="header" onClick={handleHeader}>
      <div className="container">
        <div className="head-menu">
          <Head />

          <nav className="nav">
            <Menu />
            <Button label="contact" />
          </nav>
        </div>

        <nav className="nav-mobile">
          <Menu />
          <Button label="contact" />
        </nav>

        <TitleMain />
        <ArrowDown />
      </div>
    </header>
  );
};

export default Header;
