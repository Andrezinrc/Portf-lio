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
          <div className="certificate-image-wrapper">
            <img
              src="/assets/images/certificado1.jpeg"
              alt="Certificado FreeCodeCamp"
              className="certificate-logo"
              loading="lazy"
            />
            <div className="certificate-overlay">
              <a 
                href="https://www.freecodecamp.org/certification/andredev/javascript-algorithms-and-data-structures" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Ver certificado</span>
              </a>
            </div>
          </div>
        </div>

        {/* Certificado 2 */}
        <div className="certificate-card">
          <div className="certificate-image-wrapper">
            <img
              src="/assets/images/certificado2.jpeg"
              alt="Certificado FreeCodeCamp"
              className="certificate-logo"
              loading="lazy"
            />
            <div className="certificate-overlay">
              <a 
                href="https://www.freecodecamp.org/certification/andredev/back-end-development-and-apis" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Ver certificado</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="certificates-description">
        Todos os certificados foram obtidos por meio da <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer"><strong>freeCodeCamp</strong></a>, uma plataforma internacional de ensino em desenvolvimento web.
      </p>
    </section>
  );
}

export default Certificates;
