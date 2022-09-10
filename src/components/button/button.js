import "./button.css";

const Button = ({ label }) => {
    return <button className="button">{label}</button>
};

Button.defaultProps = {
    label: "Clique aqui"
};

export default Button;