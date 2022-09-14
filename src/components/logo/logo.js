import "./logo.css";

const Logo = ({ color }) => {
    return <span className="logo" style={{ color }}>sunnyside</span>;
};

Logo.defaultProps = {
    color: "var(--color-neutral-white)"
};

export default Logo;