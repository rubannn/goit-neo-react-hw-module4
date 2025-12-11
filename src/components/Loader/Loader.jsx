import { Blocks } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <Blocks
      // visible={visible}
      height="40"
      width="40"
      color="#484444"
      ariaLabel="blocks-loading"
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
