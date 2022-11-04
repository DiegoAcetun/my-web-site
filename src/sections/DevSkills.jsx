import React from "react";
import Card from '../components/Card';
import { faHtml5, faJs, faReact, faNode, faPython, faCss3, faGitAlt } from "@fortawesome/free-brands-svg-icons";
export default function Skills() {
  return (
    <>
      <div
        id="devSkills"
        className="sm:scroll-mt-16 scroll-mt-14"
        data-aos="fade-down"
      >
        <p className="sm:text-6xl text-4xl text-blue-600 dark:text-blue-200 text-center">
          Mis hablidades de desarrollo
        </p>
        <div className="flex flex-wrap justify-center items-center text-center">
          <Card icon={faHtml5} title={"Html5"} textColor={"text-orange-600"} />
          <Card
            icon={faJs}
            title={"JavaScript"}
            description={
              "Manejo del dom, dominio de funciones, variables, objetos, etc"
            }
            textColor={"text-yellow-400"}
          />
          <Card
            icon={faCss3}
            title={"Css"}
            description={"Framworks tailwind y bootstrap"}
            textColor={"text-blue-600"}
          />

          <Card
            title={"React"}
            icon={faReact}
            description={"Hooks, componentes, estados, props"}
            textColor={"text-cyan-400"}
          />
          <Card
            icon={faNode}
            title={"Node"}
            description={"Express, mongoose, mongodb, rest api"}
            textColor={"text-green-500"}
          />
          <Card
            icon={faPython}
            title={"Python"}
            description={"Framework flask para servidor"}
            textColor={"text-blue-500"}
          />

          <Card
            icon={faGitAlt}
            title={"Git"}
            description={"Manejo de repositorios"}
            textColor={"text-red-600"}
          />
        </div>
      </div>
    </>
  );
}
