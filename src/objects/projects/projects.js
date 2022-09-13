import "./projects.css";
import CardProject from "../../components/cardProject/cardProject";
import ImageGraphicDesign from "../../images/desktop/image-graphic-design.jpg";
import ImagePhotography from "../../images/desktop/image-photography.jpg";

const Projects = () => {
    return (
        <section className="projects">
            <CardProject
            color="hsl(167, 40%, 24%)"
            backgroundImage={ `url(${ImageGraphicDesign})` }>
                <h3>Graphic design</h3>

                <p>
                    Great design makes you memorable. We deliver artwork that
                    underscores your brand message and captures potential clients’
                    attention.
                </p>
            </CardProject>

            <CardProject
            color="hsl(198, 62%, 26%)"
            backgroundImage={ `url(${ImagePhotography})` }>
                <h3>Photography</h3>

                <p>
                    Increase your credibility by getting the most stunning,
                    high-quality photos that improve your business image.
                </p>
            </CardProject>
        </section>
    );
};

export default Projects;