import styles from "./Mainhead.module.css";

const Mainhead = () => {
  const onClick = () => {
    const navBarHeight = 80;
    const aboutMeHeight = document.querySelector("#section-AboutMe").offsetTop;
    window.scrollTo({
      top: aboutMeHeight - navBarHeight,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className={styles.Mainhead}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.bigTitle}>- 조은기 -</div>
            <div className={styles.smallTitle}>웹 개발자 포트폴리오</div>
          </div>
          <hr class={styles.divider}></hr>
          <div className={styles.description}>
            안녕하세요 <br></br>예쁜게 가장 좋은 웹 개발자입니다. <br></br>
            꼼꼼한 성격, 방구석과 컴퓨터를 좋아하는 것이 저의 장점입니다.
          </div>
          <div onClick={onClick} className={styles.findOutMore}>
            더 알아보기 ↓
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mainhead;
