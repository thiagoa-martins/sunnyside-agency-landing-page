import "./cardServices.css";

const CardServices = ({ children }) => {
    return (
        <div className="card-services">
            <div>
                {children}            
                <span className="box"><span className="text">learn more</span></span>
            </div>
        </div>
    );
};

export default CardServices;