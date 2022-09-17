import "./gallery.css";
import ImageGalleryMilkbottes from "../../images/desktop/image-gallery-milkbottles.jpg";
import ImageGalleryOrange from "../../images/desktop/image-gallery-orange.jpg";
import ImageGalleryCone from "../../images/desktop/image-gallery-cone.jpg";
import ImageGallerySugarcubes from "../../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="image milkbottes">
        <img
          src={ImageGalleryMilkbottes}
          alt="Gallery milkbottes"
          title="Gallery milkbottes"
        />
      </div>

      <div className="image orange">
        <img
          src={ImageGalleryOrange}
          alt="Gallery orange"
          title="Gallery orange"
        />
      </div>

      <div className="image cone">
        <img src={ImageGalleryCone} alt="Gallery cone" title="Gallery cone" />
      </div>

      <div className="image sugarcubes">
        <img
          src={ImageGallerySugarcubes}
          alt="Gallery sugarcubes"
          title="Gallery sugarcubes"
        />
      </div>
    </div>
  );
};

export default Gallery;
