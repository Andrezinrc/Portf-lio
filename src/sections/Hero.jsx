import React from 'react';

function Hero(){
  return (
    <div className="hero" id="#">
      <div className="hero-text">
        <div>
          <h1>Transformando ideias em soluções digitais</h1>
        </div>
          
        <div>
          <p>Desenvolvedor focado em criar experiências web modernas e funcionais.</p>
        </div>
          
        <div className="social-links">
          <a href="https://github.com/Andrezinrc" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/andr%C3%A9-moreira-940886233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/andrezin.dev" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '20px',
        fontWeight: '900',
        fontSize: '3.5rem',
        color: 'rgba(0, 191, 255, 0.1)',
        userSelect: 'none',
        pointerEvents: 'none',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <span>A</span>
        <span>n</span>
        <span>d</span>
        <span>r</span>
        <span>e</span>
        <span>c</span>
        <span>o</span>
        <span>d</span>
        <span>e</span>
      </div>
    </div>
  );
};
export default Hero;
