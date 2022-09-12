import "./cardImage.css";

const CardImage = ({ src, alt }) => {
    return <img className="card-image" src={src} alt={alt} title={alt} />;
};

export default CardImage;