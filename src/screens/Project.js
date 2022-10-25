import { useState } from "react";
import ProjectElement from "../components/ProjectElement";
import SubTitle from "../components/SubTitle";
import styles from "./Project.module.css";
import ProjectKakaotalk from "../img/kakaotalk.jpg";
import ProjectProfileWebsite from "../img/profilewebsite.jpg";
import ProjectTwitterClone from "../img/twitterclone.png";
import ProjectYoutubeClone from "../img/youtubeclone.png";

const Project = ({ isPc, isTablet, isMobile }) => {
  const [count, setCount] = useState(0);
  return (
    <div id="Projects" className={styles.Projects}>
      <div className={styles.content}>
        <SubTitle title="프로젝트" id="Project" color="white" />
        <div className={styles.container}></div>
        <ProjectElement
          isPc={isPc}
          isTablet={isTablet}
          isMobile={isMobile}
          imgSrc={<img src={ProjectYoutubeClone} />}
          title="유튜브 클론코딩"
          period="2022.09 ~ 2022.10 (학습용 프로젝트)"
          gitHubLink="https://github.com/eunkeeee/youtubeclone"
          url="https://appyoutubeclone.herokuapp.com/"
          deployment="Heroku"
          MainDescription={
            <div>
              처음으로 풀스택 커리어를 결심하게 된 프로젝트입니다. 유튜브의 핵심
              기능 중{" "}
              <b>
                사용자 인증, 게시글 작성, 댓글 작성, 동영상 재생, 동영상 및
                사용자 프로필 수정
              </b>{" "}
              기능을 구현했습니다.
              <p>
                처음으로 <span className={styles.redColor}>MongoDB</span>를
                사용해보았는데, json 기반으로 저장되는 데이터의 장단점에 대해
                이해하고 필요한 데이터를 populate하는 법, 비동기처리에 대해
                고민해볼 수 있었습니다.
              </p>
              <p>
                구현하려는 서비스에 적합한 DB의 구조에 대해서도 공부하고 싶다는
                생각을 하게 되었고, 백엔드 공부를 시작하는 계기가 되었습니다.
              </p>
            </div>
          }
          MainFeature="사용자 인증, 게시글 작성, 댓글 작성, 동영상 재생, 동영상 및
          사용자 프로필 수정"
          frontend="HTML5, CSS3, Pug"
          backend="NodeJS, Express"
          database="MongoDB"
        />
        <ProjectElement
          isPc={isPc}
          isTablet={isTablet}
          isMobile={isMobile}
          imgSrc={<img src={ProjectProfileWebsite} />}
          title="포트폴리오 웹사이트"
          period="2022.08 (개인 프로젝트)"
          gitHubLink="https://github.com/eunkeeee/myportfolio"
          url="https://main.d3u6yjfxnkwlmm.amplifyapp.com/"
          deployment="AWS"
          MainDescription={
            <div>
              <b>포트폴리오로 사용하기 위해 제작한 웹사이트</b>입니다. 현재
              페이지가 이 웹사이트이며, 저의 프로젝트가 진행됨에 따라 꾸준히
              업데이트할 예정입니다.
              <p>
                2022.06에 시작한 프론트엔드 개발 공부를 통해서 HTML, CSS의
                기본적인 내용들을 익힌 후 곧바로 공부한{" "}
                <span className={styles.redColor}>ReactJS</span>를 사용하여
                제작하였습니다.
              </p>
              <p>
                편리한 업데이트를 위해서 업데이트해야 하는 요소들에 반복되는
                요소들을 모두 Component 단위로 정리하며 ReactJS를 왜 사용해야
                하는지에 대해 체감할 수 있었고, 반응형을 위한{" "}
                <span className={styles.redColor}>CSS</span>에서의 Flexbox wrap,
                Media Query, Layout Position에 대해서도 더 깊이 공부할 수
                있었습니다.
              </p>
            </div>
          }
          MainFeature="자기소개, 인적사항, 기술스펙, 연락처, 프로젝트 경험"
          frontend="React"
        />

        <ProjectElement
          isPc={isPc}
          isTablet={isTablet}
          isMobile={isMobile}
          imgSrc={<img src={ProjectTwitterClone} />}
          title="트위터 클론코딩"
          period="2022.10 (학습용 프로젝트)"
          gitHubLink="https://github.com/eunkeeee/twitterclone"
          url="https://eunkeeee.github.io/twitterclone"
          deployment="gh-pages"
          MainDescription={
            <div>
              트위터의 <b>실시간 트윗 기능</b>을 클론한 프로젝트입니다.
              <p>
                사용자 인증, 트윗 내용 저장에 필요한 DB는{" "}
                <span className={styles.redColor}>Firebase</span>에서 제공하는
                서비스를 사용해 제작했습니다. MongoDB와 NodeJS를 통해 구현하던
                백엔드의 긴 코드를 firebase의 짧은 메서드가 대체하는 점이
                효율적이라고 생각했고, 백엔드의 사용 방식에 대해서도 고민해 볼
                수 있었습니다.
              </p>
              <p>
                편리하지만 자유도가 낮은 firebase의 특성을 이해하고, document를
                보며 스스로 환경설정을 할 수 있는 능력을 길렀습니다. 빠르게 저의
                아이디어를 구현해보고 싶을 때에 firebase 또는 AWS를 사용하겠다는
                생각을 했습니다.
              </p>
            </div>
          }
          MainFeature="회원가입, 로그인, 실시간 트윗, 사진 파일을 포함한 트윗, 사용자 프로필 수정"
          frontend="React"
          backend="NodeJS"
          database="firebase"
        />
        <ProjectElement
          isPc={isPc}
          isTablet={isTablet}
          isMobile={isMobile}
          title="은기의 답정너 카카오톡"
          period="2022.06 ~ 2022.08 (개인 프로젝트)"
          imgSrc={<img src={ProjectKakaotalk} />}
          gitHubLink="https://github.com/eunkeeee/jihoon-chat"
          MainDescription={
            <div>
              저의 <b>첫 번째 프로젝트</b>로, <b>답정너</b>('<b>답</b>은{" "}
              <b>정</b>해져 있고 <b>너</b>는 답만 하면 돼'의 줄임말)라는 주제에
              따라, 원하는 답변을 입력해 전송하면 정해진 대답(편지형식)이
              돌아오는 형태의 기능을 가지고 있습니다.{" "}
              <p>
                2022년 6월 웹 프론트 개발 공부를 처음 시작하며 만들기
                시작하였고,
                <span className={styles.redColor}>HTML, CSS</span>를 사용하여
                실제 카카오톡 앱의 디자인을 최대한 클론하려 하였고, 1차적으로
                프로젝트를 완성하였습니다.
              </p>
              <p>
                이후에 공부한 <span className={styles.redColor}>VanillaJS</span>
                를 사용하여{" "}
                <b>input에 "사랑"이라는 단어가 포함된 채로 submit</b>되면 기존에
                적어놓은 <b>편지의 내용을 전송하는 방식</b>으로 남자친구의
                생일을 기념하여 2일간 제작하였습니다.{" "}
              </p>
              <p>
                CSS를 사용한 <b>다양한 애니메이션</b>에서는 실제 카카오톡과
                유사한 애니메이션을 구현하고자 많은 공부를 했고, VanillaJS를
                사용해 실제 시간을 표시하는 <b>시계</b>를 추가하여 완성도를
                높였습니다.{" "}
              </p>
            </div>
          }
          MainFeature="Frontend만을 사용해 구현한 채팅기능, 시계"
          url="https://eunkeeee.github.io/jihoon-chat/"
          frontend="HTML, CSS, VanillaJS"
          deployment="gh-pages"
        />
        <ProjectElement
          noUls={true}
          isPc={isPc}
          isTablet={isTablet}
          isMobile={isMobile}
          title="활동"
          period="2021 ~ 2022"
          MainDescription={
            <div>
              <ul>
                <li>
                  <b>[수상] 한국생산관리학회 춘계학술대회 최우수상 (2022)</b>
                  <br />
                  활동하던 SCM (공급망경영) 학회에서 나간 대회에서 [운전자의
                  안전을 고려한 화물차 공유 플랫폼]이라는 주제로 최우수상을
                  수상했습니다. 플랫폼의 확장 가능성을 중심으로 고민하며 IT
                  서비스에 관심을 갖게 되었습니다.
                </li>
                <br />
                <li>
                  <b>
                    [수상] 보건복지부 장관상 (시청각장애인 보조기기 해커톤)
                    (2022)
                  </b>
                  <br />
                  시청각장애인의 두 손을 자유롭게 하면서도 6개의 EMS 패치를
                  사용해 다양한 외부 정보를 전달할 수 있는 EMS 수트 [식스센스]를
                  제작했습니다.
                </li>
                <br />
                <li>
                  <b>
                    [봉사활동] 한국공학한림원 산하 대학생단체 [YEHS] 기획부
                    운영진 (2021.06 ~ 2022)
                  </b>
                  <br />
                  3000여 명의 YEHS 회원을 위한 행사를 기획했습니다. 가장 기억에
                  남는 행사는 '기술 소외 가구를 위한 아이디어톤'을 주최하고
                  진행을 맡았을 때와, 100명 이상의 참가자가 와 공학계 연사님들의
                  강연을 듣는 '리더십포럼'을 기획한 일이었습니다.
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Project;
