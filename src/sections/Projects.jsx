import React from "react";
import Card from "../components/Card";
import {
  faClapperboard,
  faMusic,
  faCirclePlay,
  faImage,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
export default function Projects() {
  return (
    <>
      <div id="projects" className="sm:scroll-mt-16 scroll-mt-14 mt-5">
        <p className="md:m-5 sm:text-6xl text-4xl text-center text-blue-500 dark:text-blue-200">
          Algunos proyectos que he desarrollado
        </p>
        <div className="flex flex-wrap justify-center items-center">
          <Card
            title="Buscador de películas, series y juegos"
            description="Aplicación realizada consumiendo la API OMDb"
            link={"https://diegoacetun-movie-app.netlify.app/"}
            icon={faClapperboard}
            textColor={"text-blue-500"}
          />
          <Card
            title="Reproductor Web"
            description="Reproductor de música desarrollado con Django, consumiendo una api desarrollada con Flask."
            link={"https://github.com/DiegoAcetun/ReproductorWeb"}
            icon={faCirclePlay}
            textColor={"text-green-500"}
          />
          <Card
            title="Generador de imágenes pixel art"
            description="Generador de imágenes pixel art a través de carga de un archivo en un formato en específico, empleando un analizador léxico para su lectura."
            link={"https://github.com/DiegoAcetun/GENERADOR-IMG-PIXELART"}
            icon={faImage}
            textColor={"text-indigo-700"}
          />
          <Card
            title="Control de productos"
            description="Aplicación de escritorio desarrollada con python, tkinter y mysql para llevar un control de productos"
            link={"https://github.com/DiegoAcetun/ControlDeProductos"}
            icon={faClipboardList}
            textColor={"text-zinc-600"}
          />
          <Card
            title="Reproductor de música"
            description={`Aplicación de escritorio desarrollada con python y tkinter implementando listas enlazadas circulares para crear las listas de reproducción`}
            link={"https://github.com/DiegoAcetun/ReproductorDeMusicaPython"}
            icon={faMusic}
            textColor={"text-red-700"}
          />
        </div>
      </div>
    </>
  );
}