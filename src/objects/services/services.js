import "./services.css";
import CardServices from "../../components/cardServices/cardServices";
import CardImage from "../../components/cardImage/cardImage";
import ImageTransform from "../../images/desktop/image-transform.jpg";
import ImageStandOut from "../../images/desktop/image-stand-out.jpg";

const Services = () => {
    return (
        <section className="services" id="services">
            <CardServices>
                <h2>Transform your brand</h2>

                <p>
                    We are a full-service creative agency specializing in
                    helping brands grow fast. Engage your clients through
                    compelling visuals that do most of the marketing for you.
                </p>
            </CardServices>

            <CardImage src={ImageTransform} alt="Transform" />
            <CardImage src={ImageStandOut} alt="Stand out" />

            <CardServices color="hsl(7, 99%, 70%)">
                <h2>Stand out to the right audience</h2>

                <p>
                    Using a collaborative formula of designers, researchers,
                    photographers, videographers, and copywriters, we’ll build
                    and extend your brand in digital places.
                </p>
            </CardServices>
        </section>
    );
};

export default Services;