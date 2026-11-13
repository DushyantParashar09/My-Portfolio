import React, { useState, useEffect, useRef } from 'react';
import SocialBar from './components/SocialBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExploitModal from './components/ExploitModal';
import CliTerminalModal from './components/CliTerminalModal';
import Toast from './components/Toast';
import CyberBackground from './components/CyberBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [exploitModalKey, setExploitModalKey] = useState(null);
  const [cliModalOpen, setCliModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  
  // Ref to prevent scroll listener from overriding clicked section during smooth scroll
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  // Active section tracking on scroll with getBoundingClientRect
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'works', 'skills', 'certificates', 'blogs', 'contact'];

    const handleScroll = () => {
      if (isClickScrollingRef.current) return;

      const scrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop || 0;

      // 1. If near the absolute top, always activate home
      if (scrollY < 80) {
        setActiveSection('home');
        return;
      }

      // 2. If user scrolled to the very bottom, activate contact
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // 3. Check which section is in view
      const navThreshold = 150;
      let currentSection = 'home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top has reached or scrolled past the nav threshold
          if (rect.top <= navThreshold) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const handleSelectSection = (id) => {
    setActiveSection(id);
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);
  };

  // Backtick (~) hotkey opens CLI modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          setCliModalOpen(prev => !prev);
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <>
      {/* Interactive Cyber Ambient Canvas Background */}
      <CyberBackground />

      {/* Fixed Left Social Rail */}
      <SocialBar />

      {/* Top Navbar */}
      <Navbar 
        activeSection={activeSection} 
        onSelectSection={handleSelectSection}
        onOpenCli={() => setCliModalOpen(true)} 
      />

      <main>
        {/* 1. Home Section */}
        <Hero onOpenExploit={(key) => setExploitModalKey(key)} />

        {/* Philosophy Quote */}
        <Quote />

        {/* 2. About Me Section */}
        <About onOpenExploit={(key) => setExploitModalKey(key)} />

        {/* 3. Experience Section */}
        <Experience />

        {/* 4. Projects (Works) Section */}
        <Projects onOpenExploit={(key) => setExploitModalKey(key)} />

        {/* 5. Skills Section */}
        <Skills />

        {/* 6. Certifications & Achievements Section */}
        <Certifications />

        {/* 7. Blogs Section */}
        <Blogs />

        {/* 8. Contacts Section */}
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenCli={() => setCliModalOpen(true)} />

      {/* Technical Exploit Audit Modal */}
      <ExploitModal 
        exploitKey={exploitModalKey} 
        onClose={() => setExploitModalKey(null)} 
      />

      {/* Interactive Hacker CLI Terminal Modal */}
      <CliTerminalModal 
        isOpen={cliModalOpen} 
        onClose={() => setCliModalOpen(false)} 
      />

      {/* Cyber Toast Notification */}
      <Toast message={toastMessage} />
    </>
  );
}
