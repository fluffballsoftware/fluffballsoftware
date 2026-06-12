import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Simple custom routing to handle back/forward navigation
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <Layout>
      {currentPath === '/privacy' ? (
        <PrivacyPolicy />
      ) : currentPath === '/cookie-policy' ? (
        <CookiePolicy />
      ) : (
        <>
          <Hero />
          <Services />
          <Work />
          <About />
          <Contact />
        </>
      )}
    </Layout>
  );
}

export default App;
