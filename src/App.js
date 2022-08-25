import { useState } from "react";

import Header from "./screens/Header";
import Mainhead from "./screens/Mainhead";
import AboutMe from "./screens/AboutMe";
import Skills from "./screens/Skills";
import Archiving from "./screens/Archiving";
import Project from "./screens/Project";
import Footer from "./screens/Footer";

function App() {
  const [nav, selectNav] = useState("Home");

  return (
    <div className="app">
      <Header />
      <Mainhead />
      <AboutMe />
      <Skills />
      <Archiving />
      <Project />
      <Footer />

      <a href="#top">
        <div class="pageUpBtn">
          <i class="fa-solid fa-arrow-up"></i>
        </div>
      </a>
    </div>
  );
}

export default App;
