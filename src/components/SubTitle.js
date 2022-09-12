import styles from "./Subtitle.module.css";

const SubTitle = ({ title, id, color = "black", linkColor = "white" }) => {
  const url = "#section-" + id;
  return (
    <div className={styles.title}>
      <div className={styles.text} style={{ color }}>
        {title}
      </div>
      <div className={styles.link_wrapper}>
        <a href={url} className={styles.url}>
          <i class="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  );
};

export default SubTitle;
