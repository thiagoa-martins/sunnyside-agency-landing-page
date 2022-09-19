import "./head.css";
import Logo from "../../components/logo/logo";
import IconHamburger from "../../images/icon-hamburger.svg";

const Head = () => {
  return (
    <div className="head">
      <Logo />

      <img
        className="icon-hamburger"
        src={IconHamburger}
        alt="Icon hamburger"
        title="Icon hamburger"
      />
    </div>
  );
};

export default Head;
