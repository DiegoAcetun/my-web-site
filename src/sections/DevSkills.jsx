import React from "react";
import Card from '../components/Card';
export default function Skills() {
  return (
    <>
      <p className="text-6xl text-blue-600 dark:text-blue-200 text-center">
        Mis hablidades de desarrollo
      </p>
      <div className="flex flex-wrap justify-center items-center text-center">
        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
          title="Node js"
          description="some description"
        />
        <Card
          image="https://cdn-icons-png.flaticon.com/512/919/919827.png?w=360"
          title="Node js"
          description="some description"
        />
        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
          title="Node js"
          description="some description"
        />
        <Card
          image="https://cdn-icons-png.flaticon.com/512/919/919852.png?w=360"
          title="Node js"
          description="some description"
        />
        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          title="Node js"
          description="some description"
        />
        <Card
          image="https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png"
          title="Node js"
          description="some description"
        />
        <Card
          image="data:image/jpeg;base64,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+5v4R86qfZDDQA0AAYACgG4BbEU229u2cZz1BZRYWKFX408ZiOIEI/VwyHRnDTmnswwdrhfsBGtReU2U+MGWNSey57dFdDKYnby1iayZsr9nggO+0d2n7zgOAu311quOJzXL5fLXE6+00soil1EREGFx2lAiPYWwon0bji7NziBppeKHau1YRliuyWSMuw5z86I+tSXm4ncMeNVOQIDGDNY1rRqaA0cgtyLbbWTOZ1GURFihYWUQRM/YMvG78MB3ib2XcxjxqqtaWR8VlXQHfSN8LqB43HB3Tcr8iqasc9eLOu48hY97HFpBa8YtcCDxBUvIWnoPI/Iq7WrZMGYbSI2pGDhc4bj8jcqRa+T0WBV1DEg+Jo7TR77dW3yXSal7ebXi1j3npKOYyKLsevEaVCT9muYagXatHD0WiVni2l9RoIxCnJeda8UfQg6dHEaFXuOfOdd9oqx7ZiyxoztQ63scaCuktPsnor3ZVtQZgdh1H6WOucOGkbQqpO2WH9pl+7H/AOgoONLPYa31GDhUEfMKbmaXnya8fq+49bReayOU01CuLxEbqeKn8Qv51U5L5bM/iQXtPulrx1oudxY9GfPi/a2ooFmV0ocXuG9j/kCvv/Vknoik7ocT/FZ8b+l/PP7icRVeYy0gNuYyI87g0cya9FDzWVU1FqILWw26x23DibhyWzNqb5sz7XS0LShQG50VwaNAxJ3AXlUW28pYkcFrKw4Om/tOG0jAbBzKhZguLi6I4vdpcXZx5qwZN5OOjERY4Ig4tacX6idTfPcrmZn3XC+TXkvxz6dGR1iZxbMRG0a37Np0nxnZq56leF8taAKAUAX0uerzeXpxmZnEZREWLYRZRAREQEREBERAREQEREBYWUQVe2sk4cWroNIcTGnsOO0DunaORVOmIEaXdmxGljubXbjgf1gvWFpmJZkRpZEaHNOIIqFed2OG/DnXueq84lbUps6tPopMTTHjtt4i/qL102lkYL3Sz833H1LeDsRxqq7NWXMwT24TgPEwZzebcOK6S5rz3O89zmJOLIwX4OHG7rcuR9lN0Pb+IfNRjZ13j/XFfX7c7xdB6LeKi2X6dpsv328x6r5fJNbi8b8PNcZnHOuziTs/JdcrY8zF7sF1Nb+wN9XY8E547rJOfxjU4wm4AuPRYbEiRnBkNpcdDWC4DbqG+5WWRyLrQzET7sO4cXG/pxVpkpGHBbmwmNa3YLzvOJO9TdydO+PBb+XpXbCyTawh8xRzxeGi9jd/iPTerYiLlbb29OcTM4jKIixYiIgIiICIiAiIgIiICIiAiIgIiICIiAsLKIOeLKQ399jHfE0HzC0/umX/AJEL/bZ6LtROWcRrhwWtua1rRsAHktiyiNEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z"
          title="Node js"
          description="some description"
        />
      </div>
    </>
  );
}
