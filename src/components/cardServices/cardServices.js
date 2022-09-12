import "./cardServices.css";

const CardServices = ({ children, color }) => {
    return (
        <div className="card-services">
            <div>
                {children}

                <a className="box"
                href="#"
                style={{ borderBottom: `6px solid ${color}` }}>
                    <span className="text">learn more</span>
                </a>
            </div>
        </div>
    );
};

CardServices.defaultProps = {
    color: "hsl(51, 100%, 49%)"
};

export default CardServices;