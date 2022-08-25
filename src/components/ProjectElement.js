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
      {/* <img className={styles.img} src={imgSrc} />
      <h4>{subtitle}</h4>
      <a target="_blank" href={gitHubLink}>
        GitHub 바로가기
      </a>
      <div className={styles.props}>
        <h5>ReactJS</h5>
        <h5>개인</h5>
      </div> */}
    </div>
  );
};
export default PrjoectElement;
