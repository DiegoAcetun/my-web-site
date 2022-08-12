import React from "react";

export default function Card({image, title, description}) {
  return (
    <div
      className={`max-w-sm bg-white rounded-lg border-8 border-red-800 shadow-md flex flex-col p-5 m-5 text-black`}
    >
      <img className="rounded-lg w-full" src={image} alt={title} />
      <div className="mt-8 mb-8">
        <a href="#">
          <h5 className="text-3xl tracking-tight">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-2xl">
          {description}
        </p>
      </div>
      <a
        href="#"
        className="flex border bg-blue-700 rounded-lg hover:bg-blue-800 over:bg-blue-700 w-full text-3xl justify-center mt-auto text-white"
      >
        <p>Ver</p>
      </a>
    </div>
  );
}
