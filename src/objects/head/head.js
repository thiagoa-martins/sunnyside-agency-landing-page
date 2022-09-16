import "./head.css";
import Logo from "../../components/logo/logo";
import Menu from "../../components/menu/menu";
import Button from "../../components/button/button";
import IconHamburger from "../../images/icon-hamburger.svg";

const Head = () => {
    return (
        <div className="head">
            <Logo />

            <nav>
                <Menu />
                <Button label="contact"/>
            </nav>

            <img className="icon-hamburger" src={IconHamburger} alt="" title="" />
        </div>
    );
};

export default Head;