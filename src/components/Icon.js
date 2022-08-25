import styles from "./Icon.module.css";

const Icon = ({ url, imgSrc, onClick, onMouseLeave }) => {
  return (
    <div className={styles.wrapper}>
      {" "}
      <a href={url} target="_blank">
        <div
          className={styles.icon}
          onClick={onClick}
          onMouseLeave={onMouseLeave}
        >
          {imgSrc}
        </div>
      </a>
    </div>
  );
};

export default Icon;
