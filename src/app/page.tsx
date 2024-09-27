"use client";
import React, { useState, useEffect } from "react";
import PortNavbar from "./components/Navbar/navbar";
import HomePage from "./pages/Home/page";
import AboutPage from "./pages/About/page";
import ProjectPage from "./pages/Projects/page";
import ContactPage from "./pages/Contact/page";
import Footer from "./components/Footer/footer";
import "./globals.css";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full relative">
      {/* Ficklampa */}
      <span
        className="absolute pointer-events-none rounded-full bg-white opacity-20"
        style={{
          width: "100px",
          height: "100px",
          filter: "blur(100px)",
          top: mousePosition.y - 50 + "px",
          left: mousePosition.x - 50 + "px",
          boxShadow: "0 0 200px 200px rgba(45,90,255,0.20)",
          position: "fixed",
          pointerEvents: "none",
          transition: "0.5s top 0s left 0s",
          zIndex: 10,
        }}
      ></span>

      {/* Overlay för bakgrund */}
      <div className="absolute w-full h-full bg-black opacity-20 z-0" />

      <PortNavbar />

      <div className="flex-grow z-10">
        <section id="home" className="min-h-screen">
          <HomePage />
        </section>

        <section id="about" className="min-h-screen">
          <AboutPage mousePosition={mousePosition} />
        </section>

        <section id="projects" className="min-h-screen">
          <ProjectPage />
        </section>

        <section id="contact" className="min-h-screen">
          <ContactPage />
        </section>
      </div>

      <Footer />

      {/* Overlay för ljuseffekten */}
      <div
        className="absolute"
        style={{
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 70%)",
          position: "fixed",
          top: mousePosition.y - 50 + "px",
          left: mousePosition.x - 50 + "px",
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "blur(20px)",
          mixBlendMode: "multiply",
          zIndex: 5,
        }}
      />
    </div>
  );
}
