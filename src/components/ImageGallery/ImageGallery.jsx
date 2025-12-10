import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onClick }) {
  return (
    <ul className={css["photo-gallery"]}>
      {items.map((item) => (
        <li key={item.id} className={css["gallery-item"]}>
          <ImageCard item={item} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
