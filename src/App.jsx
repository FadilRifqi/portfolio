import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <motion.div
          className="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

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
