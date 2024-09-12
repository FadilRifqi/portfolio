import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}

export default App;
