import styles from "./Subtitle.module.css";

const SubTitle = ({ title, id, color = "black" }) => {
  const url = "#" + id;
  return (
    <div className={styles.SectionTitle_Sectiontitle}>
      <div className={styles.SectionTitle_text} style={{ color }}>
        {title}
      </div>
      <div className={styles.SectionTitle_link_wrapper}>
        <a href={url} className={styles.url}>
          <i class="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  );
};

export default SubTitle;
