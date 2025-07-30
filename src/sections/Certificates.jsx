import React from 'react';

function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-title">
        <h1>Certificados<span>.</span></h1>
      </div>

      <p className="certificates-description">
        Acredito na importância do aprendizado contínuo. Estes certificados representam minha dedicação em dominar os fundamentos do desenvolvimento web e back-end, com foco em práticas modernas e projetos reais.
      </p>

      <div className="certificates-container">
        {/* Certificado 1 */}
        <div className="certificate-card">
          <img src="/assets/images/freecodecamp.png" alt="FreeCodeCamp Logo" className="certificate-logo" loading="lazy" />
          <h3>Legacy JavaScript Algorithms and Data Structures</h3>
          <p>300 horas • Dezembro 2022</p>
          <a
            href="https://freecodecamp.org/certification/AndreDev/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-button"
          >
            Ver Certificado
          </a>
        </div>

        {/* Certificado 2 */}
        <div className="certificate-card">
          <img src="/assets/images/freecodecamp.png" alt="FreeCodeCamp Logo" className="certificate-logo" loading="lazy" />
          <h3>Back End Development and APIs</h3>
          <p>300 horas • Setembro 2024</p>
          <a
            href="https://freecodecamp.org/certification/AndreDev/back-end-development-and-apis"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-button"
          >
            Ver Certificado
          </a>
        </div>
      </div>

      <p className="certificates-description">
        Todos os certificados foram obtidos por meio da <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer"><strong>freeCodeCamp</strong></a>, uma plataforma internacional de ensino em desenvolvimento web.
      </p>
    </section>
  );
}

export default Certificates;
