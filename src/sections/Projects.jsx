import React from 'react';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-title">
        <h1>Projetos<span>.</span></h1>
      </div>
    
      <p className="projects-description">
        Apesar do foco em desenvolvimento web, também criei projetos em C, envolvendo desafios de redes, algoritmos e manipulação de arquivos.
      </p>
    
      <div className="project-wrapper">
    
        {/* Projeto 1 - Huffman */}
        <div className="project-card">
          <img src="/assets/images/huffman.jpeg" alt="Projeto Huffman" loading="lazy" />
          <div className="project-info">
            <div>
              <h2 className="card-title">Compactador Huffman</h2>
            </div>
            
            <div>
              <p>
                Implementação do algoritmo de compressão e descompressão de arquivos com codificação Huffman, visando otimizar o espaço de armazenamento.
              </p>
            </div>
            
            <div className="tech">
              <span>C</span>
            </div>
            
            <div>
              <a href="https://github.com/Andrezinrc/huffman" target="_blank" className="project-button">
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
    
        {/* Projeto 2 - TCP Chat */}
        <div className="project-card">
          <img src="/assets/images/chat.jpeg" alt="Projeto TCP Chat" loading="lazy" />
          <div className="project-info">
            <div>
              <h2 className="card-title">TCP Chat Seguro</h2>
            </div>
            
            <div>
              <p>
                Sistema de chat com comunicação segura via TCP e criptografia própria, ideal para aprender sobre redes e segurança.
              </p>
            </div>
            
            <div className="tech">
              <span>C</span>
            </div>
            
            <div>
              <a href="https://github.com/Andrezinrc/tcp_secure_chat" target="_blank" className="project-button">
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
        
        { /* Projeto 3 - Task API */ }
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
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
        
        { /* Projeto 4 - URL Shortener API */ }
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
                Ver no GitHub
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
