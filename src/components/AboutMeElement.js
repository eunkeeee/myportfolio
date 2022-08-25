import styles from "./AboutMeElement.module.css";

const AboutMeElement = ({ iconImport, fieldLabel, fieldValue }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.basic_info}>
        <div className={styles.icon_wrapper}>{iconImport}</div>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>{fieldLabel}</div>
          <div className={styles.fieldValue}>{fieldValue}</div>
        </div>
      </div>
    </div>
  );
};
export default AboutMeElement;
