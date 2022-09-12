import { useState } from "react";
import ProjectElement from "../components/ProjectElement";
import SubTitle from "../components/SubTitle";
import styles from "./Project.module.css";
import ProjectKakaotalk from "../img/kakaotalk.jpg";
import ProjectProfileWebsite from "../img/profilewebsite.jpg";

const Project = () => {
  const [count, setCount] = useState(0);
  return (
    <div id="Projects" className={styles.Projects}>
      <div className={styles.content}>
        <SubTitle title="프로젝트" id="Project" color="white" />
        <div className={styles.container}></div>
        {/* 포트폴리오 사이트 */}
        <ProjectElement
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
          frontend="ReactJS"
        />
        <ProjectElement
          imgSrc="#"
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
                사용해 실제 시간을 표시하는 <b>시게</b>를 추가하여 완성도를
                높였습니다.{" "}
              </p>
            </div>
          }
          MainFeature="Frontend만을 사용해 구현한 채팅기능, 시계"
          url="https://eunkeeee.github.io/jihoon-chat/"
          frontend="HTML, CSS, VanillaJS"
          deployment="gh-pages"
        />
      </div>
    </div>
  );
};

export default Project;
