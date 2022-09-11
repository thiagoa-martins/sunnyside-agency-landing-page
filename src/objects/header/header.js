import "./header.css";
import Head from "../../objects/head/head";
import TitleMain from "../../components/titleMain/titleMain";
import ArrowDown from "../../components/arrowDown/arrowDown";

const Header = () => {
    return (
        <header className="header">
            <Head />
            <TitleMain />
            <ArrowDown />
        </header>
    );
};

export default Header;