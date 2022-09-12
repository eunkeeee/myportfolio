const onPageMove = ({ index }) => {
  const navBarHeight = 80;
  const aboutMeHeight = document.querySelector("#section-AboutMe").offsetTop;
  const skillsHeight = document.querySelector("#section-Skills").offsetTop;
  const ProjectHeight = document.querySelector("#section-Project").offsetTop;
  const ArchivingHeight =
    document.querySelector("#section-Archiving").offsetTop;
  const elementsHeight = [
    aboutMeHeight,
    ArchivingHeight,
    skillsHeight,
    ProjectHeight,
  ];
  console.log(elementsHeight);
  return elementsHeight;
};
export const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
