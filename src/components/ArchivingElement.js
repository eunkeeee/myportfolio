import styles from "../screens/Archiving.module.css";

const ArchivingElement = ({ imgSrc, url, p, liArray }) => {
  return (
    <div>
      <a className={styles.element} href={url} target="_blank">
        <div className={styles.imgWrapper}>
          <img src={imgSrc} className={styles.elementImg} />
        </div>
        <div className={styles.url}>{url}</div>
        <div className={styles.description}>
          <p>{p}</p>
          <ul>
            {/* {liArray.foreach((element) => {
            <li>{element}</li>;
          })} */}
          </ul>
        </div>
      </a>
    </div>
  );
};
export default ArchivingElement;
