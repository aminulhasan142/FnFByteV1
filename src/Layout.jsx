import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ContactForm from "./components/ContactSection";
import Footer from "./components/Footer";
import MenuContent from "./components/MenuContent";
import Navbar from "./components/Navbar";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // Optional: Prevent scrolling when the menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [isMenuOpen]);
  return (
    <>
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      {/* mega menu section */}
      <MenuContent toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <main>
        <Outlet />
      </main>
      {/* Contact Section */}
      <ContactForm />
      <Footer />
    </>
  );
}
