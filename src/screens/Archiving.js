import SubTitle from "../components/SubTitle";
import ArchivingElement from "../components/ArchivingElement";
import styles from "./Archiving.module.css";

const Archiving = () => {
  return (
    <div className={styles.Archiving}>
      <div className={styles.content}>
        <SubTitle id="Archiving" title="아카이브" color="white" />
        <div className={styles.container}>
          <ArchivingElement
            imgSrc="https://png.monster/wp-content/uploads/2022/02/png.monster-703.png"
            url="https://github.com/eunkeeee"
            p="프로젝트의 소스코드의 저장공간입니다."
          />
        </div>
      </div>
    </div>
  );
};
export default Archiving;
