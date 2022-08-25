import styles from "../screens/AboutMe.module.css";

const AboutMe_basic_info = ({ iconImport, fieldLabel, fieldValue }) => {
  return (
    <div className={styles.basic_info_wrapper}>
      <div className={styles.basic_info}>
        <div className={styles.basic_info_icon_wrapper}>{iconImport}</div>
        <div className={styles.basic_info_field}>
          <div className={styles.fieldLabel}>{fieldLabel}</div>
          <div className={styles.fieldValue}>{fieldValue}</div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe_basic_info;
