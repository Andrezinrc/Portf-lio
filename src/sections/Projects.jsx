import React from 'react';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-title">
        <h1>Projetos<span>.</span></h1>
      </div>
    
      <p className="projects-description">
        Meu foco principal é desenvolvimento web, criando soluções que envolvem backend, frontend e APIs.
      </p>
    
      <div className="project-wrapper">
        {/* Projeto 1 - Clothing-store */}
        <div className="project-card">
          <img 
            src="/assets/images/clothing-store.png" 
            alt="Projeto Clothing Store" 
            loading="lazy" 
          />
          <div className="project-info">
            <div>
              <h2 className="card-title">Clothing Store</h2>
            </div>
        
            <div>
              <p>
                E-commerce de moda com catálogo de produtos, carrinho de compras e layout responsivo. 
                Focado em experiência do usuário e design moderno.
              </p>
            </div>
            
            <div className="tech">
              <span>React.js</span>
              <span>Context API</span>
              <span>CSS Modules</span>
            </div>
        
            <div>
              <a 
                href="https://clothing-store-taupe.vercel.app" 
                target="_blank" 
                className="project-button"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
        
        { /* Projeto 2 - Barber System */ }
        <div className="project-card">
          <img 
            src="/assets/images/barber.png" 
            alt="Sistema de Agendamento para Barbearia" 
            loading="lazy"
          />
          <div className="project-info">
            <div>
              <h2 className="card-title">dreeagenda</h2>
            </div>
        
            <div>
              <p>
                Sistema completo para barbearias com agendamento online e controle de serviços.
              </p>
            </div>
            
            <div className="tech">
              <span>React.js</span>
              <span>Firebase</span>
              <span>CSS Flexbox</span>
              <span>CRUD</span>
            </div>
        
            <div className="project-links">
              <a 
                href="https://dreeagenda.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-button demo"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
    
        {/* Projeto 3 - Task API */}
        <div className="project-card">
          <img src="/assets/images/task-api.jpeg" alt="Projeto Task API" loading="lazy" />
          <div className="project-info">
            <div>
              <h2 className="card-title">Task API</h2>
            </div>
        
            <div>
              <p>
                API RESTful para gerenciamento de tarefas, com autenticação de usuários e operações CRUD, seguindo boas práticas de organização.
              </p>
            </div>
            
            <div className="tech">
              <span>Nodejs</span>
              <span>Express</span>
              <span>Mongoose</span>
            </div>
        
            <div>
              <a href="https://github.com/Andrezinrc/task-api" target="_blank" className="project-button">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Projeto 4 - URL Shortener API */}
        <div className="project-card">
          <img src="/assets/images/url-shortener-api.jpeg" alt="Projeto URL Shortener API" loading="lazy" />
          <div className="project-info">
            <div>
              <h2 className="card-title">URL Shortener API</h2>
            </div>
        
            <div>
              <p>
                API para encurtamento de URLs, criando códigos curtos únicos e redirecionando para os links originais, com lógica diferente de um CRUD tradicional.
              </p>
            </div>
        
            <div className="tech">
              <span>Nodejs</span>
              <span>Express</span>
              <span>Mongoose</span>
            </div>
            
            <div>
              <a href="https://github.com/Andrezinrc/url-shortener-api" target="_blank" className="project-button">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <p className="projects-description">
        Esses são apenas os primeiros passos. Se quiser conversar sobre tecnologia ou possíveis parcerias, fique à vontade para me chamar.
      </p>
    
    </section>
  );
};

export default Projects;
