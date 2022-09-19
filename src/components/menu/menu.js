import "./menu.css";

const Menu = () => {
    return (
        <ul className="menu">
            <li><a href="#header">about</a></li>
            <li><a href="#services">services</a></li>
            <li><a href="#projects">projects</a></li>
        </ul>
    );
};

Menu.defaultProps = {
    color: "var(--color-neutral-white)"
};

export default Menu;