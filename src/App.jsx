import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
