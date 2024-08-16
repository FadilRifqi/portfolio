import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let lastScrollY = window.scrollY;

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", newDarkMode);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;

    // Check if window is scrolled more than 0
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{
        y: { duration: 0.5, ease: "easeOut" },
      }}
      className={`bg-white dark:bg-gray-900 border-gray-200 sticky top-0 z-20 ${
        isScrolled ? "top-4 mx-4 rounded" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={heroImg} className="h-8" alt="Flowbite Logo" />
        </a>
        <div className={`block w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={`block w-full md:block md:w-auto`} id="navbar-default">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 p-1 bg-gray-200 dark:bg-gray-800 rounded-full"
          >
            <div
              className={`flex items-center justify-center w-7 h-7 rounded-full ${
                isDarkMode ? "bg-transparent" : "bg-gray-700"
              }`}
            >
              <FontAwesomeIcon
                icon={faLightbulb}
                className={`${
                  isDarkMode ? "text-gray-400" : "text-yellow-500"
                }`}
              />
            </div>
            <div
              className={`flex items-center justify-center w-7 h-7 rounded-full ${
                isDarkMode ? "bg-gray-300" : " bg-transparent"
              }`}
            >
              <FontAwesomeIcon
                icon={faMoon}
                className={`${isDarkMode ? "text-blue-500" : "text-gray-400"}`}
              />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
