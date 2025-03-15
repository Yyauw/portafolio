import Header from "../components/Header";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Technologies from "../sections/Technologies";
import About from "../sections/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-screen max-w-screen overflow-x-hidden w-screen dark:bg-gray-800 scroll-smooth">
      <section className="container mx-auto" id="inicio">
        <Header />
        <Hero />
        <Projects />
        <Technologies />
        <About />
        <Footer />
      </section>
    </div>
  );
}
