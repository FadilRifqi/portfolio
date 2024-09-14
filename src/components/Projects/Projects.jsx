import { useState } from 'react';
import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import Preview from './Preview';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 py-12"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }} // Animation triggered when 30% is in view
        >
          My Projects
        </motion.h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 items-center justify-center`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, y: -100 }} // Start from below
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: (index % 3) * 0.2 },
              }} // Animate when in view
              viewport={{ once: false, amount: 0.2 }} // 30% of element triggers animation
              whileHover={{
                scale: 1.05,
                cursor: 'pointer',
                transition: { duration: 0.1 },
              }}
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
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
      </div>

      {selectedProject && (
        <Preview
          imageUrl={selectedProject.image}
          openModal={() => openModal(selectedProject)}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      )}
    </section>
  );
};

export default Projects;
