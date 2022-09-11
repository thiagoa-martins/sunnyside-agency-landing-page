import "./header.css";
import Head from "../../objects/head/head";
import TitleMain from "../../components/titleMain/titleMain";

const Header = () => {
    return (
        <header className="header">
            <Head />
            <TitleMain />
        </header>
    );
};

export default Header;