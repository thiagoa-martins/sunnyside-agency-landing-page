import "./head.css";
import Logo from "../../components/logo/logo";
import IconHamburger from "../../images/icon-hamburger.svg";
import Menu from "../../components/menu/menu";
import Button from "../../components/button/button";

const Head = () => {
  return (
    <div className="head">
      <Logo />

      <div className="head-menu">
        <img
          className="icon-hamburger"
          src={IconHamburger}
          alt="Icon hamburger"
          title="Icon hamburger"
        />

        <nav className="nav">
          <Menu />
          <Button label="contact" />
        </nav>
      </div>
    </div>
  );
};

export default Head;
