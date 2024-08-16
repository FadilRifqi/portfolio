import { useScroll, useTransform, motion } from "framer-motion";
import heroImg from "../../assets/hero-img.png";

const Hero = () => {
  // Get the scroll position
  const { scrollY } = useScroll();

  // Create parallax effect for the image and text
  const imageX = useTransform(scrollY, [200, 500], [0, -700]);
  const textX = useTransform(scrollY, [200, 500], [0, 800]);
  const moveY = useTransform(scrollY, [0, 500], [0, 500]); // Moves both image and text down
  const opacity = useTransform(scrollY, [0, 500], [1, 0]); // Changes opacity from 1 to 0

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 dark:bg-gray-800 py-12"
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
        style={{ x: imageX, y: moveY, opacity }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={heroImg} alt="Hero" className="w-3/4 rounded-lg" />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left px-4"
        style={{ x: textX, y: moveY, opacity }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Myself
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I am a 5th-semester Informatics Engineering student with a strong
          passion for web development. I enjoy creating innovative and
          responsive websites, utilizing modern technologies and best practices
          to deliver clean and efficient code. As I continue to expand my skills
          and knowledge in the field, I am eager to take on new challenges and
          contribute to impactful web projects.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
