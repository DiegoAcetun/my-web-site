import React from "react";
import Card from '../components/Card';
import { faHtml5, faJs, faReact, faNode, faPython, faCss3, faGitAlt } from "@fortawesome/free-brands-svg-icons";
export default function Skills() {
  return (
    <>
      <div id="devSkills" className="scroll-mt-16">
        <p className="text-6xl text-blue-600 dark:text-blue-200 text-center">
          Mis hablidades de desarrollo
        </p>
        <div className="flex flex-wrap justify-center items-center text-center">
          <Card
            // image={Html}
            icon={faHtml5}
            title={"Html5"}
            textColor={"text-orange-600"}
          />
          <Card
            // image={Javascript}
            icon={faJs}
            title={"JavaScript"}
            description={"Manejo del dom, dominio de funciones, variables, objetos, etc"}
            textColor={"text-yellow-400"}
          />
          <Card
            icon={faCss3}
            title={"Css"}
            description={"Framworks tailwind y bootstrap"}
            textColor={"text-blue-600"}
          />

          <Card
            // image= {ReactImg}
            title={"React"}
            icon={faReact}
            description={"Hooks, componentes, estados, props"}
            textColor={"text-cyan-400"}
          />
          <Card
            // image= {Node}
            icon={faNode}
            title={"Node"}
            description={"Express, mongoose, mongodb, rest api"}
            textColor={"text-green-500"}
          />
          <Card
            // image= {Python}
            icon={faPython}
            title={"Python"}
            description={"Framework flask para servidor"}
            textColor={"text-blue-500"}
          />

          <Card
            // image={Bootstrap}
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
