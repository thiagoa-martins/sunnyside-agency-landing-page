import "./socials.css";
import IconFacebook from "../../images/icon-facebook.svg";
import IconInstagram from "../../images/icon-instagram.svg";
import IconTwitter from "../../images/icon-twitter.svg";
import IconPinterest from "../../images/icon-pinterest.svg";

const Socials = () => {
    return (
        <ul className="socials">
            <li>
                <a href="#">
                    <img
                    src={IconFacebook}
                    alt="Icon Facebook"
                    title="Icon Facebook" />
                </a>
            </li>

            <li>
                <a href="#">
                    <img src={IconInstagram}
                    alt="Icon Instagram"
                    title="Icon Instagram" />
                </a>
            </li>

            <li>
                <a href="#">
                    <img
                    src={IconTwitter}
                    alt="Icon Twitter"
                    title="Icon Twitter" />
                </a>
            </li>

            <li>
                <a href="#">
                    <img src={IconPinterest}
                    alt=""
                    title="" />
                </a>
            </li>
        </ul>
    );
};

export default Socials;