import styles from "./Subtitle.module.css";
import { useMediaQuery } from "react-responsive";

const SubTitle = ({ title, id, color = "black", linkColor = "white" }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <div className={styles.title}>
      <div
        className={styles.text}
        style={{ color, fontSize: `${isMobile ? "2.5rem" : "3rem"}` }}
      >
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
