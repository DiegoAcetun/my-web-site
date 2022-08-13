import React from "react";
import Card from '../components/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faBrain, faLanguage, faFileWord } from "@fortawesome/free-solid-svg-icons";
export default function Skills() {
  return (
    <>
      <div id="skills">
        <p className="text-6xl text-blue-600 dark:text-blue-200 text-center">
          Otras hablidades
        </p>
        <div className="flex flex-wrap justify-center items-center text-center">
          <Card
            title={"Trabajo en equipo"}
            icon={faPeopleGroup}
            description={"some description"}
            textColor={"text-orange-300"}
          />
          <Card
            title={"Resolución de problemas"}
            icon={faBrain}
            description={"some description"}
            textColor={"text-red-300"}
          />
          <Card
            title={"Inglés Básico"}
            icon={faLanguage}
            description={"some description"}
            textColor={"text-blue-500"}
          />
          <Card
            title={"Inglés Básico"}
            icon={faFileWord}
            description={"some description"}
            textColor={"text-blue-600"}
          />
        </div>
      </div>
    </>
  );
}
