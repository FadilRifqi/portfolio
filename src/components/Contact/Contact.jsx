import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-100 dark:bg-gray-800 py-8 min-h-screen flex flex-col items-center justify-center"
    >
      <motion.div
        className="max-w-screen-xl mx-auto p-4 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }} // This replaces useInView
        viewport={{ once: true, amount: 0.5 }} // Triggers animation when 30% is in view
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Contact
        </h2>
        <div className="flex justify-center flex-wrap gap-6 mb-8">
          <motion.a
            href="https://www.instagram.com/ataullahrifqi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-500"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </motion.a>
          <motion.a
            href="https://github.com/FadilRifqi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-400 dark:hover:text-gray-400"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammad-fadil-ataullah-rifqi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-blue-300 dark:hover:text-blue-300"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </motion.a>
          <motion.a
            href="mailto:fadilataullahrifqi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-500"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
