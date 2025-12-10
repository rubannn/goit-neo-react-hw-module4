import { Blocks } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader({ visible }) {
  return (
    <Blocks
      visible={visible}
      height="40"
      width="40"
      color="#484444"
      ariaLabel="blocks-loading"
      wrapperClass={css.loader}
    />
  );
}
