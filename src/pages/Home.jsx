import Header from "../components/Header";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <div className="h-screen max-w-screen overflow-x-hidden w-screen dark:bg-gray-800 scroll-smooth">
      <section className="container mx-auto h-[200vh]" id="inicio">
        <Header />
        <Hero />
        <Projects />
      </section>
    </div>
  );
}
