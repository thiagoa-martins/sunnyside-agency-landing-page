import "./menu.css";

const Menu = () => {
    return (
        <ul className="menu">
            <li><a className="section" href="#header">about</a></li>
            <li><a className="section" href="#services">services</a></li>
            <li><a className="section" href="#projects">projects</a></li>
        </ul>
    );
};

Menu.defaultProps = {
    color: "var(--color-neutral-white)"
};

export default Menu;