import css from "./ImageCard.module.css";

export default function ImageCard({ item, onClick }) {
  const handleClick = () => {
    onClick(item);
  };
  return (
    <div onClick={handleClick}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={css.image}
        loading="lazy"
      />
    </div>
  );
}
