const onPageMove = ({ index }) => {
  const navBarHeight = 80;
  const aboutMeHeight = document.querySelector("#section-AboutMe").offsetTop;
  const skillsHeight = document.querySelector("#section-Skills").offsetTop;
  const ArchivingHeight =
    document.querySelector("#section-Archiving").offsetTop;
  const ProjectHeight = document.querySelector("#section-Project").offsetTop;
  const elementsHeight = [
    aboutMeHeight,
    skillsHeight,
    ArchivingHeight,
    ProjectHeight,
  ];
  console.log(elementsHeight);
  return elementsHeight;
};
export const onPageTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
