import "./clientTestimonial.css";

const ClientTestimonial = ({ children, src, alt, title }) => {
    return (
        <div className="client-testimonial">
            <img src={src} alt={alt} title={title} />

            {children}            
        </div>
    );
};

export default ClientTestimonial;