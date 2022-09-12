import styles from "./Subtitle.module.css";

const SubTitle = ({ title, id, color = "black", linkColor = "white" }) => {
  return (
    <div className={styles.title}>
      <div className={styles.text} style={{ color }}>
        {title}
      </div>
      <div className={styles.link_wrapper}>
        <div className={styles.url}>
          <i class="fa-solid fa-link"></i>
        </div>
      </div>
    </div>
  );
};

export default SubTitle;
