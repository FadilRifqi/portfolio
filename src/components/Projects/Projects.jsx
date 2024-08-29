import { projects } from "../../data/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  // Use Intersection Observer to track if the section is in view
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false, // Trigger multiple times based on scroll
    threshold: 0.3,
  });

  // Use Scroll to apply parallax effect
  const { scrollY } = useScroll();
  const yTransform2 = useTransform(scrollY, [0, 300], [-150, 0]);

  // Determine grid columns based on the number of projects
  const getGridColsClass = () => {
    if (projects.length === 1) {
      return "grid-cols-1";
    } else if (projects.length === 2) {
      return "grid-cols-1 sm:grid-cols-2";
    } else {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <motion.section
      ref={inViewRef}
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        style={{ y: yTransform2 }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Projects
      </motion.h2>
      <div
        className={`grid ${getGridColsClass()} gap-8 px-4 items-center justify-center`}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            style={{ y: yTransform2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-content rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-20">
              {project.description}
            </p>
            <a
              href={project.link}
              className="text-blue-500 dark:text-blue-300 hover:underline"
            >
              See Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
