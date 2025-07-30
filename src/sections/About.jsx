import React from 'react';

function About(){
  return (
    <section className="about-text" id="about">
      <div className="about-title">
        <h1>Sobre Mim<span>.</span></h1>
      </div>
      
      <div>
        <p>
          Sou <strong>André Moreira</strong>, desenvolvedor web fullstack com foco em criar aplicações modernas, limpas e funcionais. Iniciei minha jornada em 2020 como autodidata, explorando a programação por meio de pequenos projetos e desafios práticos.
        </p>
      </div>
      
      <div>
        <p>
          Desde 2020, venho desenvolvendo projetos reais com tecnologias como <strong>JavaScript, Node.js, React.js</strong> e bancos de dados <strong>NoSQL</strong>. Tenho como princípios a escrita de código limpo, design minimalista e soluções que resolvem problemas reais. Estou sempre em busca de aprendizado constante e de oportunidades para colaborar em produtos de valor.
        </p>
      </div>
      
      <div className="about-button-container">
        <a className="about-button" href="#projetos">Ver Projetos</a>
      </div>
    </section>
  );
};
export default About;
