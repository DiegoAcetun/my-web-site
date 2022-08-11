import React from "react";
import About from "../components/About";
import Card from "../components/Card";
export default function Home() {
  return (
    <div className="container mx-auto my-5 text-3xl">
      <About />
      <Card />
    </div>
  );
}
