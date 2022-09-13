import styles from "./Skill.module.css";

const Skill = ({ title, imgSrcsWithDiv, isMobile }) => {
  return (
    <div className={styles.tech}>
      <div
        className={styles.title}
        style={{ fontSize: `${isMobile ? "1rem" : "1.5rem"}` }}
      >
        {title}
      </div>
      <div className={styles.imgDiv}>{imgSrcsWithDiv}</div>
    </div>
  );
};
export default Skill;
