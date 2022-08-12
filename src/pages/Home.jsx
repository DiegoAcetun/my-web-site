import React from "react";
import About from "../components/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
export default function Home() {
  return (
    <div className="container mx-auto my-5 text-3xl border-8 border-blue-400">
      <About />
      <Projects />
      <Skills />
    </div>
  );
}
