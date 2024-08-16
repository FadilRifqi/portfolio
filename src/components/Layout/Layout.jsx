import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dark:bg-gray-800 bg-gray-100 dark:text-white min-h-screen">
      {isMobile ? <NavbarMobile /> : <Navbar />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
