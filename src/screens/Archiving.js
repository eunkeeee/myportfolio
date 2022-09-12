import SubTitle from "../components/SubTitle";
import ArchivingElement from "../components/ArchivingElement";
import styles from "./Archiving.module.css";

const Archiving = () => {
  return (
    <div className={styles.Archiving}>
      <div className={styles.content}>
        <SubTitle id="Archiving" title="Archiving" color="white" />
        <div className={styles.container}>
          <ArchivingElement
            imgSrc="https://png.monster/wp-content/uploads/2022/02/png.monster-703.png"
            url="https://github.com/eunkeeee"
            p="모든 프로젝트의 소스코드를 저장한 GitHub입니다."
            // liArray=["과거 프로젝트, 프로그램, 앱의 소스 코드",
            // "혼자서 코딩 연습을 위해 끄적이던 소스 코드"]
          />
        </div>
      </div>
    </div>
  );
};
export default Archiving;
