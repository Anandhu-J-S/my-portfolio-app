import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import EmailForm from "./components/Email/Email";

function Routers() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const emailRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                scrollToAbout={() => scrollToSection(aboutRef)}
                scrollToSkills={() => scrollToSection(skillsRef)}
                scrollToProjects={() => scrollToSection(projectsRef)}
                scrollToEmail={() => scrollToSection(emailRef)}
              />
              <Hero />

              <div ref={aboutRef} style={{ scrollMarginTop: "80px" }}>
                <About />
              </div>

              <div ref={skillsRef} style={{ scrollMarginTop: "80px" }}>
                <Skills />
              </div>

              <div ref={projectsRef} style={{ scrollMarginTop: "80px" }}>
                <Projects />
              </div>

              <Education /> {/* Not linked from navbar, so no ref here */}

              <div ref={emailRef} style={{ scrollMarginTop: "80px" }}>
                <EmailForm />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
