import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";


const ImageGallery = ({ images, onClickFn }) => {
   
    return (
        <div>
            <ul className={s.imageList} >
                {images.map((image) => (
                <li key={image.id} >
                    <ImageCard onClickFn={onClickFn} image={image} />
                </li>
            ))}
            </ul>
        </div>
    );
};

export default ImageGallery;