import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { programmingLanguages } from "../../data/skills";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Get the scroll position
  const { scrollY } = useScroll();

  // Define parallax effect
  const xTransform = useTransform(scrollY, [0, 500], ["0%", "0%"]);
  const yTransform = useTransform(scrollY, [0, 500], ["0%", "50%"]);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My Programming Skills
      </motion.h2>
      <motion.ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 text-gray-900 dark:text-white"
        style={{ x: xTransform, y: yTransform }}
      >
        {programmingLanguages.map((language, index) => (
          <motion.li
            key={index}
            className="text-xl sm:text-2xl flex flex-col items-center space-y-2"
            initial={{
              opacity: 0,
              x: -20,
              y: -20,
            }}
            animate={
              inView
                ? { opacity: 1, x: 0, y: 0 }
                : {
                    opacity: 0,
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                  }
            }
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <span className="relative group flex flex-col items-center">
              {typeof language.icon === "string" ? (
                <img
                  src={language.icon}
                  alt={language.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900 dark:text-white group-hover:text-blue-500"
                  style={{ color: language.color }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={language.icon}
                  size="2x"
                  style={{ color: language.color }}
                  className="text-gray-900 dark:text-white group-hover:text-blue-500"
                />
              )}
              <span className="mt-2">{language.name}</span>
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Skills;
