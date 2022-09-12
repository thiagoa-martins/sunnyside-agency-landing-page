import "./services.css";
import CardServices from "../../components/cardServices/cardServices";
import CardImage from "../../components/cardImage/cardImage";
import ImageTransform from "../../images/desktop/image-transform.jpg";

const Services = () => {
    return (
        <section className="services">
            <CardServices>
                <h2>Transform your brand</h2>

                <p>
                We are a full-service creative agency specializing in helping brands
                grow fast. Engage your clients through compelling visuals that do most
                of the marketing for you.
                </p>
            </CardServices>

            <CardImage src={ImageTransform} alt="Image transform" />
        </section>
    );
};

export default Services;