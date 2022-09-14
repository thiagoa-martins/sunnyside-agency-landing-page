import "./button.css";

const Button = ({ label }) => {
    return <a href="#contact"><button className="button">{label}</button></a>;
};

Button.defaultProps = {
    label: "Clique aqui"
};

export default Button;