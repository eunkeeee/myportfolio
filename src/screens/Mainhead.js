import styles from "./Mainhead.module.css";

const Mainhead = () => {
  return (
    <div>
      <div className={styles.Mainhead}>
        <div className={styles.content}>
          <div className={styles.title}>
            - 조은기 -<br></br>웹 개발자 포트폴리오
          </div>
          <hr class={styles.divider}></hr>
          <div className={styles.description}>
            안녕하세요 <br></br>예쁜게 가장 좋은 웹 개발자입니다. <br></br>
            꼼꼼한 성격, 방구석과 컴퓨터를 좋아하는 것이 저의 장점입니다.
          </div>
          <a href="#AboutMe" className={styles.findOutMore}>
            더 알아보기 ↓
          </a>
        </div>
      </div>
    </div>
  );
};
export default Mainhead;
