import "./gallery.css";
import ImageGalleryMilkbottes from "../../images/desktop/image-gallery-milkbottles.jpg";
import ImageGalleryOrange from "../../images/desktop/image-gallery-orange.jpg";
import ImageGalleryCone from "../../images/desktop/image-gallery-cone.jpg";
import ImageGallerySugarcubes from "../../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
    return (
        <div className="gallery">
            <img src={ImageGalleryMilkbottes}
            alt="Gallery milkbottes"
            title="Gallery milkbottes" />
            <img />

            <img src={ImageGalleryOrange}
            alt="Gallery orange"
            title="Gallery orange" />
            <img />

            <img src={ImageGalleryCone}
            alt="Gallery cone"
            title="Gallery cone" />
            <img />

            <img src={ImageGallerySugarcubes}
            alt="Gallery sugarcubes"
            title="Gallery sugarcubes" />
        </div>
    );
};

export default Gallery;