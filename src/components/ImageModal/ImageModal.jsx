import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",

    padding: "20px",
    border: "none",

    maxWidth: "100%",
    maxHeight: "90%",
    textAlign: "center",
  },
};

const ImageModal = ({ isOpen, imageData, onClose }) => {
  if (!imageData) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.ImageModal}
      style={customStyles}
    >
      <img
        className={css.BigImage}
        src={imageData.urls.regular}
        alt={imageData.alt_description}
      />
      <p>{imageData.description || "No description available"}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;
