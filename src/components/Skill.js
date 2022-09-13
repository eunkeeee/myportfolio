import styles from "./Skill.module.css";

const Skill = ({ title, imgSrcsWithDiv, isMobile }) => {
  return (
    <div
      className={styles.tech}
      style={{ width: `${isMobile ? "100%" : "17rem"}` }}
    >
      <div
        className={styles.title}
        style={{ fontSize: `${isMobile ? "1.2rem" : "1.5rem"}` }}
      >
        {title}
      </div>
      <div className={styles.imgDiv}>{imgSrcsWithDiv}</div>
    </div>
  );
};
export default Skill;
