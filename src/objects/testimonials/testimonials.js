import "./testimonials.css";
import TitleTestimonial from "../../components/titleTestimonial/titleTestimonial";
import ClientTestimonial from "../../components/clientTestimonial/clientTestimonial";
import ImageEmily from "../../images/image-emily.jpg";
import ImageThomas from "../../images/image-thomas.jpg";
import ImageJennie from "../../images/image-jennie.jpg";

const Testimonials = () => {
    return (
        <section className="testimonials">
            <TitleTestimonial label="Client testimonials" />

            <div className="cards">
                <ClientTestimonial src={ImageEmily}
                alt="Emily"
                title="Emily">
                    <p>
                        We put our trust in Sunnyside and they delivered, making
                        sure our needs were met and deadlines were always hit.
                    </p>

                    <h4>Emily R.</h4>
                    <span>Marketing Director</span>
                </ClientTestimonial>

                <ClientTestimonial src={ImageThomas}
                alt="Thomas"
                title="Thomas">
                    <p>
                        Sunnyside’s enthusiasm coupled with their keen interest in
                        our brand’s success made it a satisfying and enjoyable
                        experience.
                    </p>

                    <h4>Thomas S.</h4>
                    <span>Chief Operating Officer</span>
                </ClientTestimonial>

                <ClientTestimonial src={ImageJennie}
                alt="Jennie"
                title="Jennie">
                    <p>
                        Incredible end result! Our sales increased over 400% when we
                        worked with Sunnyside. Highly recommended!
                    </p>

                    <h4>Jennie F.</h4>
                    <span>Business Owner</span>
                </ClientTestimonial>
            </div>
        </section>
    );
};

export default Testimonials;