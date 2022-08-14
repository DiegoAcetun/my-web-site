import React from "react";
import Card from "../components/Card";
export default function Projects() {
  return (
    <>
      <div id="projects" className="scroll-mt-16 mt-5">
        <p className="md:m-5 text-6xl text-center text-blue-500 dark:text-blue-200">
          Algunos proyectos que he desarrollado
        </p>
        <div className="flex flex-wrap justify-center items-center">
          <Card
            title="Buscador de películas, series y juegos"
            image="https://github.com/DiegoAcetun/my-web-site/blob/main/src/pages/img/movie.jpg?raw=true"
            description="Aplicación realizada consumiendo la API OMDb"
            link={"https://diegoacetun-movie-app.netlify.app/"}
          />
          <Card
            title="Reproductor Web"
            image="https://github.com/DiegoAcetun/my-web-site/blob/main/src/pages/img/reproductor.jpg?raw=true"
            description="Reproductor de música desarrollado con Django, consumiendo una api desarrollada con Flask"
            link={"https://github.com/DiegoAcetun/ReproductorWeb"}
          />
          <Card
            title="Generador de imágenes pixel art"
            image="https://diegoacetun.github.io/my-web-site/static/media/pixel.801245af97e0b0c29e20.jpg"
            description="Generador de imágenes pixel art a través de carga de un archivo en un formato en específico, empleando un analizador léxico para su lectura"
            link={"https://github.com/DiegoAcetun/GENERADOR-IMG-PIXELART"}
          />
          <Card
            title="Control de productos"
            image="https://diegoacetun.github.io/my-web-site/static/media/products.cb14f1d5c225f2172a73.jpg"
            description="Aplicación de escritorio desarrollada con python, tkinter y mysql para llevar un control de productos"
            link={"https://github.com/DiegoAcetun/ControlDeProductos"}
          />
          <Card
            title="Reproductor de música"
            image="https://diegoacetun.github.io/my-web-site/static/media/reproductor.6a14b7cc46c80be0c8b5.jpg"
            description="Aplicación de escritorio desarrollada con python y tkinter implementando listas enlazadas circulares para crear las listas de reproducción"
            link={"https://github.com/DiegoAcetun/ReproductorDeMusicaPython"}
          />
        </div>
      </div>
    </>
  );
}
