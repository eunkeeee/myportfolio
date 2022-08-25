import styles from "./Skill.module.css";

const Skill = ({ title, imgSrcsWithDiv }) => {
  return (
    <div className={styles.tech}>
      <div className={styles.title}>{title}</div>
      <div className={styles.imgDiv}>{imgSrcsWithDiv}</div>
    </div>
  );
};
export default Skill;
