import SubTitle from "../components/SubTitle";
import Skill from "../components/Skill";
import styles from "./Skills.module.css";

const Skills = ({ isPc, isTablet, isMobile }) => {
  return (
    <article className={styles.Skills}>
      <div className={styles.content}>
        <SubTitle id="Skills" title="스킬" />
        <div className={styles.techContainer}>
          <Skill
            title="FrontEnd"
            imgSrcsWithDiv={
              <div>
                <img src="https://velog.velcdn.com/images/songe/post/c1c7427a-71c3-4de8-bf93-a224be79f6ae/image.PNG" />
                <img src="https://velog.velcdn.com/images/rkddl6803/post/11c0a76b-52e5-4413-a799-05ded157e13e/image.png" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" />
              </div>
            }
          />
          <Skill
            title="Backend"
            imgSrcsWithDiv={
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/1280px-Python_logo_and_wordmark.svg.png" />
              </div>
            }
          />
          <Skill
            title="Deployment"
            imgSrcsWithDiv={
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/2560px-AmazonWebservices_Logo.svg.png" />
              </div>
            }
          />
          <Skill
            title="Version Control"
            imgSrcsWithDiv={
              <div>
                <img src="https://image.toast.com/aaaadh/real/2017/techblog/GitLogo2Color.png" />
                <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTNfOTMg/MDAxNTk0NjM0NjI5NzUw.LxX1Whkaof_e-n3N_wO03lSoZl--YMF8dkgRMxImNk0g.BxwVQn5zShY21jnl8r8ynp0Kg9Ggqf1gtZgSMu970KQg.PNG.nms200299/github.png?type=w800" />
              </div>
            }
          />
          <Skill
            title="Certificate"
            imgSrcsWithDiv={
              <div>
                <img src="https://www.korcham.net/nCham/Service/imgs/img_top_logo.png" />
                <div>컴퓨터활용능력 1급</div>
              </div>
            }
          />
        </div>
      </div>
    </article>
  );
};
export default Skills;
