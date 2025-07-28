import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';

function Content(){
  return (
    <main className="content">
      {/* Seção Hero: destaque inicial com título, parágrafo e links sociais */}

      <Hero />

      {/* Seção: Sobre mim */}
      <About />

      { /* Seção Habiliades */ }
      <Skills />

      { /* Seção Certificados */ }
      <Certificates />
    </main>
  );
}
export default Content;
