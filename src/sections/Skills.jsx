import React from 'react';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-title">
        <h1>Minhas Habilidades<span>.</span></h1>
      </div>

      <div>
        <p className="skills-description">
          Essas são algumas das tecnologias que utilizo para transformar ideias em soluções funcionais, com código limpo, visual agradável e foco na experiência do usuário.
        </p>

        <p className="skills-description" style={{ marginTop: '15px' }}>
          Busco sempre aprimorar minhas habilidades, mantendo-me atualizado com as melhores práticas e tendências modernas do desenvolvimento web.
        </p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          <img src="../public/assets/images/c.png" alt="C logo" loading="lazy" />
          <img src="../public/assets/images/js.png" alt="JavaScript logo" loading="lazy" />
          <img src="../public/assets/images/ts.png" alt="TypeScript logo" loading="lazy" />
          <img src="../public/assets/images/react.png" alt="React logo" loading="lazy" />
          <img src="../public/assets/images/node.png" alt="Node.js logo" loading="lazy" />
          <img src="../public/assets/images/express.png" alt="express logo" loading="lazy" />
          <img src="../public/assets/images/mongodb.png" alt="mongoDB logo" loading="lazy" />
          <img src="../public/assets/images/mysql.png" alt="MySql logo" loading="lazy" />
          <img src="../public/assets/images/git.png" alt="Git logo" loading="lazy" />

          {/* Duplicado para loop contínuo */}
          <img src="../public/assets/images/c.png" alt="C logo" loading="lazy" />
          <img src="../public/assets/images/js.png" alt="JavaScript logo" loading="lazy" />
          <img src="../public/assets/images/ts.png" alt="TypeScript logo" loading="lazy" />
          <img src="../public/assets/images/react.png" alt="React logo" loading="lazy" />
          <img src="../public/assets/images/node.png" alt="Node.js logo" loading="lazy" />
          <img src="../public/assets/images/express.png" alt="express logo" loading="lazy" />
          <img src="../public/assets/images/mongodb.png" alt="mongoDB logo" loading="lazy" />
          <img src="../public/assets/images/mysql.png" alt="MySql logo" loading="lazy" />
          <img src="../public/assets/images/git.png" alt="Git logo" loading="lazy" />
        </div>
      </div>

      <p className="skills-description" style={{ marginTop: '15px' }}>
        Conhecimento sólido é o primeiro passo para grandes conquistas.
      </p>
    </section>
  );
}

export default Skills;
