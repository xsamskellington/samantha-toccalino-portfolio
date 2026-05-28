import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import SkipLink from "@/components/SkipLink/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
