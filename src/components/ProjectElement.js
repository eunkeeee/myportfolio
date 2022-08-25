import styles from "./ProjectElement.module.css";

const PrjoectElement = ({
  imgSrc,
  title,
  period,
  gitHubLink,
  MainDescription,
  MainFeature,
  url,
  frontend,
  deployment,
}) => {
  return (
    <div className={styles.Project}>
      <div className={styles.title}>{title}</div>
      <div className={styles.period}>{period}</div>
      <div className={styles.info}>
        <div className={styles.imgs}>
          {imgSrc}
          {/* <nav className={styles.nav}>
            <i class="fa-solid fa-angle-left"></i>
            4/4
            <i class="fa-solid fa-angle-right"></i>
          </nav> */}
        </div>
        <div className={styles.descriptions}>
          <div className={styles.MainDescription}>{MainDescription}</div>
          {/* 소스코드 바로가기 버튼 */}
          <a href={gitHubLink} target="_blank">
            <button className={styles.btn}>
              <i class="fa-brands fa-github"></i>
              <div>Source Code</div>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </a>
          <hr />
          <ul className="fa-ul">
            <li className={styles.li}>
              <div>
                <span className="fa-li">
                  <i className="fa-solid fa-check"></i>
                </span>
                <div>주요 기능</div>
              </div>
              <div>{MainFeature}</div>
            </li>
            <li className={styles.li}>
              <div>
                {" "}
                <span className="fa-li">
                  <i class="fa-solid fa-check"></i>
                </span>
                <div>GitHub</div>
              </div>
              <div>
                <a href={gitHubLink} target="_blank" className={styles.urlDeco}>
                  {gitHubLink}
                </a>
              </div>
            </li>
            <li className={styles.li}>
              <div>
                <span className="fa-li">
                  <i class="fa-solid fa-check"></i>
                </span>
                <div>URL</div>
              </div>
              <div>
                <a href={url} target="_blank" className={styles.urlDeco}>
                  {url}
                </a>
              </div>
            </li>
            <li className={styles.li}>
              {" "}
              <div>
                {" "}
                <span className="fa-li">
                  <i class="fa-solid fa-check"></i>
                </span>
                <div>Frontend</div>
              </div>
              <div>{frontend}</div>
            </li>
            <li className={styles.li}>
              {" "}
              <div>
                {" "}
                <span className="fa-li">
                  <i class="fa-solid fa-check"></i>
                </span>
                <div>Deployment</div>
              </div>
              <div>{deployment}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PrjoectElement;
