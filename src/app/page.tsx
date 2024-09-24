import React from "react";
import PortNavbar from "./components/Navbar/navbar";
import HomePage from "./pages/Home/page";
import AboutPage from "./pages/About/page";
import ProjectPage from "./pages/Projects/page";
import ContactPage from "./pages/Contact/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div>
        <PortNavbar />
      </div>
      <div>
        <section id="home">
          <HomePage />
        </section>

        <section id="about">
          <AboutPage />
        </section>

        <section id="projects">
          <ProjectPage />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </div>
    </div>
  );
}
