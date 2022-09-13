import "./cardProject.css";

const CardProject = ({ children, color, backgroundImage }) => {
    return (
        <div className="card-project" style={{ color, backgroundImage }}>
            {children}
        </div>
    );
};

export default CardProject;