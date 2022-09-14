import "./cardProject.css";

const CardProject = ({ children, color }) => {
    return (
        <div className="card-project" style={{ color }}>
            {children}
        </div>
    );
};

export default CardProject;