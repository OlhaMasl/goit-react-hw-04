import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
    
    return (
        <div className={s.imageWrapper}>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>
    );
};

export default ImageCard;