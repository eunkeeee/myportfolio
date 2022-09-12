import { useState } from "react";

import Header from "./screens/Header";
import Mainhead from "./screens/Mainhead";
import AboutMe from "./screens/AboutMe";
import Skills from "./screens/Skills";
import Archiving from "./screens/Archiving";
import Project from "./screens/Project";
import Footer from "./screens/Footer";

function App() {
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
        <Header />
      </div>
      <div id="section-Mainhead">
        <Mainhead />
      </div>
      <div id="section-AboutMe">
        <AboutMe />
      </div>
      <div id="section-Skills">
        <Skills />
      </div>
      <div id="section-Archiving">
        <Archiving />
      </div>
      <div id="section-Project">
        <Project />
      </div>
      <div id="section-Footer">
        <Footer />
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
