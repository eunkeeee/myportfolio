import { useState } from "react";

import Header from "./screens/Header";
import Mainhead from "./screens/Mainhead";
import AboutMe from "./screens/AboutMe";
import Skills from "./screens/Skills";
import Archiving from "./screens/Archiving";
import Project from "./screens/Project";
import Footer from "./screens/Footer";
import { useMediaQuery } from "react-responsive";

function App() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const isWideEnough = () => {};
  const [appearBtn, setAppear] = useState(false);
  const scrollDown = () => {
    if (window.scrollY > 500) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  };
  // useEffect(scrollDown, [appearBtn]);
  window.addEventListener("scroll", scrollDown);
  return (
    <div className="app">
      <div id="top"></div>
      <div id="section-Header">
        <Header isPc={isPc} isTablet={isTablet} isMobile={isMobile} />
      </div>
      <div id="section-Mainhead">
        <Mainhead isPc={isPc} isTablet={isTablet} isMobile={isMobile} />
      </div>
      <div id="section-AboutMe">
        <AboutMe isPc={isPc} isTablet={isTablet} isMobile={isMobile} />
      </div>
      <div id="section-Skills">
        <Skills isPc={isPc} isTablet={isTablet} isMobile={isMobile} />
      </div>
      <div id="section-Archiving">
        <Archiving isPc={isPc} isTablet={isTablet} isMobile={isMobile} />
      </div>
      <div id="section-Project">
        <Project isPc={isPc} isTablet={isTablet} isMobile={isMobile} />
      </div>
      <div id="section-Footer">
        <Footer isPc={isPc} isTablet={isTablet} isMobile={isMobile} />
      </div>

      {appearBtn ? (
        <a href="#top">
          <div class="pageUpBtn">
            <i class="fa-solid fa-arrow-up"></i>
          </div>
        </a>
      ) : null}
    </div>
  );
}

export default App;
