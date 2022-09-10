import "./head.css";
import Logo from "../../components/logo/logo";
import Menu from "../../components/menu/menu";
import Button from "../../components/button/button";

const Head = () => {
    return (
        <div className="head">
            <Logo />

            <nav>
                <Menu />
                <Button label="contact"/>
            </nav>
        </div>
    );
};

export default Head;