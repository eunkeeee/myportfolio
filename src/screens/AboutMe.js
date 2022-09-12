import styles from "./AboutMe.module.css";
import AboutMeElement from "../components/AboutMeElement";
import SubTitle from "../components/SubTitle";

const AboutMe = () => {
  return (
    <article className={styles.AboutMe}>
      <div className={styles.content}>
        <SubTitle title="자기소개" id="AboutMe" />
        <div className={styles.basic_infos}>
          <AboutMeElement
            iconImport={<i class="fa-solid fa-person"></i>}
            fieldLabel="이름"
            fieldValue="조은기"
          />
          <AboutMeElement
            iconImport={<i class="fa-solid fa-calendar"></i>}
            fieldLabel="생년월일"
            fieldValue="00.04.16"
          />
          <AboutMeElement
            iconImport={<i class="fa-solid fa-location-dot"></i>}
            fieldLabel="주소"
            fieldValue="서울특별시 서초구"
          />
          <AboutMeElement
            iconImport={<i class="fa-solid fa-phone"></i>}
            fieldLabel="연락처"
            fieldValue="010-2555-3673"
          />
          <AboutMeElement
            iconImport={<i class="fa-solid fa-at"></i>}
            fieldLabel="이메일"
            fieldValue="eunkeee@yonsei.ac.kr"
          />
          <AboutMeElement
            iconImport={<i class="fa-solid fa-school"></i>}
            fieldLabel="학력"
            fieldValue="연세대학교 산업공학과"
          />
        </div>
      </div>
    </article>
  );
};
export default AboutMe;
