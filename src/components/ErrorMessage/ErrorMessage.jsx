import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return (
    <div className={css["container"]}>
      <p className={css["error-message"]}>{message}</p>
    </div>
  );
}
