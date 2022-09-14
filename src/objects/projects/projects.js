import "./projects.css";
import CardProject from "../../components/cardProject/cardProject";
import ImageGraphicDesign from "../../images/desktop/image-graphic-design.jpg";
import ImagePhotography from "../../images/desktop/image-photography.jpg";

const Projects = () => {
    return (
        <section className="projects">
            <div className="project">
                <img src={ImageGraphicDesign}
                alt="Image graphic design"
                title="Image graphic design" />
                
                <CardProject
                color="hsl(167, 40%, 24%)">
                    <h3>Graphic design</h3>

                    <p>
                        Great design makes you memorable. We deliver artwork that
                        underscores your brand message and captures potential clients’
                        attention.
                    </p>
                </CardProject>
            </div>

            <div className="project">
                <img src={ImagePhotography}
                alt="Image photography"
                title="Image photography" />

                <CardProject
                color="hsl(198, 62%, 26%)">
                    <h3>Photography</h3>

                    <p>
                        Increase your credibility by getting the most stunning,
                        high-quality photos that improve your business image.
                    </p>
                </CardProject>
            </div>
        </section>
    );
};

export default Projects;