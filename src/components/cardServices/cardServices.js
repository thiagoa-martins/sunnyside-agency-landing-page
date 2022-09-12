import "./cardServices.css";

const CardServices = ({ children }) => {
    return (
        <div className="card-services">
            <div>
                {children}            
                <a className="box" href="#">
                    <span className="text">learn more</span>
                </a>
            </div>
        </div>
    );
};

export default CardServices;