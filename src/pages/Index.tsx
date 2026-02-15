import React, { useEffect } from "react";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingContactButton from "@/components/FloatingContactButton";
import Achievements from "@/components/Achievements";
import { Analytics } from "@vercel/analytics/react";

const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Analytics />
      <Navbar />
      <Header />
      <main className="relative">
        <FloatingContactButton />
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
