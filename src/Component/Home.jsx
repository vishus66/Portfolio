import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div class="container-fluid bg-light mt-0" id="home">
        <div class="container"></div>
      </div>
      <Experience />
      <Skills />
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
