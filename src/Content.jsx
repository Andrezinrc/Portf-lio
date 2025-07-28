import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
  
function Content(){
  return (
    <main className="content">
      {/* Seção Hero: destaque inicial com título, parágrafo e links sociais */}

      <Hero />

      {/* Seção: Sobre mim */}
      <About />
    </main>
  );
}
export default Content;
