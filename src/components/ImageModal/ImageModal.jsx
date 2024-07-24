import Modal from 'react-modal'; 
import s from "./ImageModal.module.css"

const ImageModal = ({ image, openFn, closeFn }) => {
    Modal.setAppElement("#root");

    return (
        <Modal
        isOpen={openFn}
        shouldCloseOnEsc={true}
        onRequestClose={() => closeFn()}
        >
            <img className={s.modalImage} src={image.urls.regular} alt={image.alt_description}/>
        </Modal>

    );
};

export default ImageModal;