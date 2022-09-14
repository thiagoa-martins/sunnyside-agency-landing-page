import "./menu.css";

const Menu = ({ color }) => {
    return (
        <ul className="menu">
            <li><a href="#header" style={{ color }}>about</a></li>
            <li><a href="#services" style={{ color }}>services</a></li>
            <li><a href="#projects" style={{ color }}>projects</a></li>
        </ul>
    );
};

Menu.defaultProps = {
    color: "var(--color-neutral-white)"
};

export default Menu;