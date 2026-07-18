import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Interests from "./components/Interests/Interests";
import Footer from "./components/Footer/Footer";
import LoadingSkeleton from "./components/Projects/LoadingSkeleton";

const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Suspense fallback={<LoadingSkeleton />}>
        <Projects />
      </Suspense>
      <Interests />
      <Suspense fallback={<div>Loading contact...</div>}>
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
