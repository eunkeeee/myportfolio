import styles from "./ProjectElement.module.css";

const PrjoectElement = ({
  isPc,
  isTablet,
  isMobile,
  imgSrc,
  title,
  period,
  gitHubLink,
  MainDescription,
  MainFeature,
  url,
  frontend,
  backend,
  database,
  deployment,
  noUls,
}) => {
  return (
    <div
      className={styles.Project}
      style={{ padding: `${isPc ? "3rem" : "2rem 1rem"}` }}
    >
      <div
        className={styles.title}
        style={{ fontSize: `${isMobile ? "1.5rem" : "2.5rem"}` }}
      >
        {title}
      </div>
      <div
        className={styles.period}
        style={{ fontSize: `${isMobile ? "0.7rem" : "1rem"}` }}
      >
        {period}
      </div>
      <div className={styles.info}>
        {imgSrc && (
          <div
            className={styles.imgs}
            style={{ width: `${isPc ? "50%" : "100%"}` }}
          >
            {imgSrc}
          </div>
        )}
        <div
          className={styles.descriptions}
          style={{ width: `${noUls ? "100%" : "45%"}` }}
        >
          <div
            className={styles.MainDescription}
            style={{ fontSize: `${isMobile ? "0.7rem" : "1rem"}` }}
          >
            {MainDescription}
          </div>

          {!noUls && (
            <>
              {" "}
              <hr />
              <ul
                style={{ fontSize: `${isMobile ? "0.7rem" : "1rem"}` }}
                className="fa-ul"
              >
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
                    <a
                      href={gitHubLink}
                      target="_blank"
                      className={styles.urlDeco}
                    >
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
                {frontend && (
                  <li className={styles.li}>
                    <div>
                      <span className="fa-li">
                        <i class="fa-solid fa-check"></i>
                      </span>
                      <div>Frontend</div>
                    </div>
                    <div>{frontend}</div>
                  </li>
                )}
                {backend && (
                  <li className={styles.li}>
                    <div>
                      <span className="fa-li">
                        <i class="fa-solid fa-check"></i>
                      </span>
                      <div>Backend</div>
                    </div>
                    <div>{backend}</div>
                  </li>
                )}
                {database && (
                  <li className={styles.li}>
                    <div>
                      <span className="fa-li">
                        <i class="fa-solid fa-check"></i>
                      </span>
                      <div>Database</div>
                    </div>
                    <div>{database}</div>
                  </li>
                )}
                <li className={styles.li}>
                  <div>
                    <span className="fa-li">
                      <i class="fa-solid fa-check"></i>
                    </span>
                    <div>Deployment</div>
                  </div>
                  <div>{deployment}</div>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
      {/* position absolute로 할것 */}
      {/* 소스코드 바로가기 버튼
      <a className={styles.btnWrapper} href={gitHubLink} target="_blank">
        <button className={styles.btn}>
          <i class="fa-brands fa-github"></i>
          <div>Source Code</div>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </a> */}
    </div>
  );
};
export default PrjoectElement;
