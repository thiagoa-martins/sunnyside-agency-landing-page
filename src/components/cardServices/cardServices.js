import "./cardServices.css";

const CardServices = ({ children }) => {
    return (
        <div className="card-services">
            <div>
                {children}            
                <span className="box"><a className="link" href="#">learn more</a></span>
            </div>
        </div>
    );
};

export default CardServices;