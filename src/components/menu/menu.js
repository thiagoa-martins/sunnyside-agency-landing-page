import "./menu.css";

const Menu = ({ color }) => {
    return (
        <ul className="menu">
            <li><a href="#" style={{ color }}>about</a></li>
            <li><a href="#" style={{ color }}>services</a></li>
            <li><a href="#" style={{ color }}>projects</a></li>
        </ul>
    );
};

Menu.defaultProps = {
    color: "var(--color-neutral-white)"
};

export default Menu;