import styles from "./AboutMeElement.module.css";
import { useMediaQuery } from "react-responsive";

const AboutMeElement = ({ iconImport, fieldLabel, fieldValue }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.basic_info}>
        <div
          className={styles.icon_wrapper}
          style={{ fontSize: `${isMobile ? "1.8rem" : "2rem"}` }}
        >
          {iconImport}
        </div>
        <div className={styles.field}>
          <div
            className={styles.fieldLabel}
            style={{ fontSize: `${isMobile ? "1rem" : "1.25rem"}` }}
          >
            {fieldLabel}
          </div>
          <div
            className={styles.fieldValue}
            style={{ fontSize: `${isMobile ? "0.9rem" : "1rem"}` }}
          >
            {fieldValue}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMeElement;
