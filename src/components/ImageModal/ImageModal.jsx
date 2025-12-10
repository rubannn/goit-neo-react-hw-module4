import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Example Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={image.urls?.regular} alt={image.description} />
      <p className={css.likes}>
        <span className={css.left}>Description: {image.alt_description}</span>
        <span className={css.right}>Likes: {image.likes || 0}</span>
      </p>
    </Modal>
  );
}
