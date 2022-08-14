import React from "react";
import About from "../sections/About";
import Projects from "../sections/Projects";
import  DevSkills from "../sections/DevSkills";
import Skills from "../sections/Skills";
export default function Home() {
  return (
    <div className="container mx-auto mt-16 text-3xl">
      <About />
      <Projects />
      <DevSkills />
      <Skills />
    </div>
  );
}
