import React from "react";
import Card from '../components/Card';
import { faPeopleGroup, faBrain, faLanguage, faFileWord } from "@fortawesome/free-solid-svg-icons";
export default function Skills() {
  return (
    <>
      <div
        id="skills"
        className="sm:scroll-mt-16 scroll-mt-14"
        data-aos="fade-down"
      >
        <p className="sm:text-6xl text-4xl text-blue-600 dark:text-blue-200 text-center">
          Otras hablidades
        </p>
        <div className="flex flex-wrap justify-center items-center text-center">
          <Card
            title={"Trabajo en equipo"}
            icon={faPeopleGroup}
            textColor={"text-orange-300"}
          />
          <Card
            title={"Resolución de problemas"}
            icon={faBrain}
            textColor={"text-red-300"}
          />
          <Card
            title={"Inglés Básico"}
            icon={faLanguage}
            textColor={"text-blue-500"}
          />
          <Card
            title={"Manejo de office"}
            icon={faFileWord}
            textColor={"text-blue-600"}
          />
        </div>
      </div>
    </>
  );
}
