import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClickFn }) => {
    
    return (
        <div className={s.imageWrapper}>
            <img src={image.urls.small} alt={image.alt_description} onClick={() => onClickFn(image)} />
        </div>
    );
};

export default ImageCard;