import React from "react";
import Card from '../components/Card';
import Html from '../images/html.png';
import Bootstrap from '../images/Bootstrap1.jpg';
import Python from '../images/python.png';
import Javascript from '../images/js.png';
import ReactImg from "../images/react.jpg";
import Node from "../images/node.png";
import Tailwind from "../images/tailwind.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faBootstrap, faReact, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";
export default function Skills() {
  return (
    <>
      <p className="text-6xl text-blue-600 dark:text-blue-200 text-center">
        Mis hablidades de desarrollo
      </p>
      <div className="flex flex-wrap justify-center items-center text-center">
        <Card
          // image={Html}
          icon={faHtml5}
          title={"Html"}
          description={"some description"}
          textColor={"text-orange-600"}
        />
        <Card
          // image={Javascript}
          icon={faJs}
          title={"JavaScript"}
          description={"some description"}
          textColor={"text-yellow-400"}
        />
        <Card
          image={Tailwind}
          title={"Tailwind"}
          description={"some description"}
        />
        <Card
          // image={Bootstrap}
          icon={faBootstrap}
          title={"Boostrap"}
          description={"some description"}
          textColor={"text-purple-800"}
        />
        <Card
          // image= {ReactImg}
          title={"React"}
          icon={faReact}
          description={"some description"}
          textColor={"text-cyan-400"}
        />
        <Card
          // image= {Node}
          icon={faNodeJs}
          title={"Node"}
          description={"some description"}
          textColor={"text-green-500"}
        />
        <Card
          // image= {Python}
          icon={faPython}
          title={"Python"}
          description={"some description"}
          textColor={"text-blue-500"}
        />
      </div>
    </>
  );
}
