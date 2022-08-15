import React from "react";
import About from "../sections/About";
import Projects from "../sections/Projects";
import  DevSkills from "../sections/DevSkills";
import Skills from "../sections/Skills";
export default function Home() {
  return (
    <div className="sm:mt-20 mt-12 mx-4">
      <About />
      <Projects />
      <DevSkills />
      <Skills />
    </div>
  );
}
