import "./footer.css";
import Gallery from "../gallery/gallery";
import Logo from "../../components/logo/logo";
import Menu from "../../components/menu/menu";
import Socials from "../../components/socials/socials";

const Footer = () => {
    return (
        <footer className="footer">
            <Gallery />

            <section>
                <Logo color="var(--color-primary-dark-desaturated-cyan)" />
                <Menu />
                <Socials />
            </section>
        </footer>
    );
};

export default Footer;