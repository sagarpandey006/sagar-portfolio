import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiVolume2, FiVolumeX } from "react-icons/fi";
import logo from "../assets/nav-img/nav-avatar.png";
import sunIcon from "../assets/nav-img/sun.png";
import moonIcon from "../assets/nav-img/moon.png";
import backgroundMusic from "../assets/mp3/preloader.mp3";
import switchSound from "../assets/mp3/switch-on.mp3";
import openSound from "../assets/mp3/open.mp3";
import menuSound from "../assets/mp3/menu.mp3";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Theme state - default dark
  const [isSoundOn, setIsSoundOn] = useState(false); // Sound state - default off
  // const [isRotating, setIsRotating] = useState(false);
  const [isThemeRotating, setIsThemeRotating] = useState(false); // New state for theme only
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  // Trigger popup after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1 second delay after page load

    return () => clearTimeout(timer);
  }, []);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize background music
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current.loop = true; // Loop the music
    }
  }, []);

  // Handle sound toggle
  useEffect(() => {
    if (audioRef.current) {
      if (isSoundOn) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isSoundOn]);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Play sound effect function
  const playSound = (soundSrc: string) => {
    const audio = new Audio(soundSrc);
    audio.volume = 0.5; // 50% volume for sound effects
    audio.play().catch(console.error);
  };

  // Theme toggle function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    playSound(switchSound);
    setIsThemeRotating(true); // Use separate state
    setTimeout(() => setIsThemeRotating(false), 500);
    console.log("Theme toggled:", !isDarkMode ? "Dark" : "Light");
  };

  // Sound toggle function
  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
    playSound(openSound);
    // Remove rotation from here - no setIsRotating(true)
    console.log("Sound toggled:", !isSoundOn ? "On" : "Off");
  };

  // Mobile menu toggle function
  const toggleMobileMenu = () => {
    console.log("Menu button clicked, current isOpen:", isOpen);
    setIsOpen(!isOpen);
    playSound(menuSound); // Play menu sound
    console.log("Menu state will change to:", !isOpen);
  };

  // Terminal Section to render
  const handleTerminalClick = () => {
  window.open("https://sagarpandey006.netlify.app/", "_blank");
  };


  const menuItems = [
    { id: "about text-white", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "ternimal", label: "Terminal", isExternal: true },
  ];


  return (
    <>
      <div className="fakenavbar"></div>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo" tabIndex={0} aria-label="Sagar Pandey logo">
          <div className={`hey ${showPopup ? 'popup' : ''}`}>Hey!</div>
          <div className="logo-top">
            <img 
              src={logo} 
              alt="Sagar Avatar"
            />
          </div>
        </div>

        {/* Logo Text */}
        <div className="logo-text" onClick={() => handleMenuItemClick("landing")}>
          <span style={{ color: '#8245ec' }}>&lt;</span>
          <span style={{ color: 'white' }}>Sagar</span>
          <span style={{ color: '#8245ec' }}>/</span>
          <span style={{ color: 'white' }}>Portfolio</span>
          <span style={{ color: '#8245ec' }}>&gt;</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-tabs">
          <ul className="navbar-tabs-ul">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => item.isExternal ? handleTerminalClick() : handleMenuItemClick(item.id)}
                  className={activeSection === item.id ? "text-[#8245ec]" : ""}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Controls (Theme & Sound) */}
        <div className="navbar-controls">
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setIsThemeRotating(true)}
            onMouseLeave={() => setIsThemeRotating(false)}
            className={isThemeRotating ? "animate-spin-slow" : ""}
            aria-label="Toggle theme"
          >
            <img 
              src={isDarkMode ? moonIcon : sunIcon} 
              alt="Theme toggle"
              style={{ width: '24px', height: '24px'}}
            />
          </button>
          
          <button
            onClick={toggleSound}
            aria-label="Toggle sound"
          >
            {isSoundOn ? (
              <FiVolume2 size={24} />
            ) : (
              <FiVolumeX size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden mobile-toggle">
          {isOpen ? (
            <FiX
              size={24}
              style={{ color: '#8245ec', cursor: 'pointer' }}
              onClick={toggleMobileMenu}
            />
          ) : (
            <FiMenu
              size={24}
              style={{ color: '#8245ec', cursor: 'pointer' }}
              onClick={toggleMobileMenu}
            />
          )}
        </div>
        
        {/* Hidden Audio Element */}
        <audio 
          ref={audioRef} 
          src={backgroundMusic} 
          preload="auto"
          style={{ display: 'none' }}
        />
      </nav>

      {/* Mobile Menu Items - Separate from navbar */}
      {isOpen && (
        <div 
          className="block md:hidden"
          style={{
            position: 'fixed',
            top: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '400px',
            background: 'rgba(5, 4, 20, 0.95)',
            backdropFilter: 'blur(15px)',
            borderRadius: '20px',
            padding: '25px',
            zIndex: 10000,
            display: 'block',
            visibility: 'visible',
            opacity: '1',
            border: '1px solid rgba(130, 69, 236, 0.3)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}
        >
          <ul style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '15px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => item.isExternal ? handleTerminalClick() : handleMenuItemClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? '#8245ec' : 'white',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div style={{ display: 'flex', gap: '20px', marginTop: '15px', paddingTop: '15px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button 
                onClick={toggleTheme} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  padding: '8px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <img 
                  src={isDarkMode ? moonIcon : sunIcon} 
                  alt="Theme toggle"
                  style={{ width: '24px', height: '24px' }}
                />
              </button>
              <button 
                onClick={toggleSound} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'white',
                  padding: '8px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                {isSoundOn ? <FiVolume2 size={24} /> : <FiVolumeX size={24} />}
              </button>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
