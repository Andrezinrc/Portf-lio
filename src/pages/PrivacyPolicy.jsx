import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Política de Privacidade</h1>
      <p><strong>Última atualização:</strong> {new Date().toLocaleDateString()}</p>

      {/* Seção 1 - Coleta */}
      <section>
        <h2>1. Coleta de Dados</h2>
        <p>
          Ao enviar seu e-mail através do formulário, coletamos <strong>apenas seu endereço de e-mail</strong> para:
        </p>
        <ul>
          <li>Responder seu contato ou dúvidas;</li>
          <li>Enviar informações sobre meus serviços profissionais (se solicitado).</li>
        </ul>
      </section>

      {/* Seção 2 - Uso */}
      <section>
        <h2>2. Uso dos Dados</h2>
        <p>
          Seu e-mail será usado <strong>exclusivamente</strong> para:
        </p>
        <ul>
          <li>Comunicação direta sobre seu interesse em meus serviços;</li>
          <li>Não será usado para newsletters ou marketing sem consentimento explícito.</li>
        </ul>
      </section>

      {/* Seção 3 - EmailJS */}
      <section>
        <h2>3. Serviços de Terceiros</h2>
        <p>
          Utilizo o <strong>EmailJS</strong> para envio automático de e-mails. Seus dados:
        </p>
        <ul>
          <li>Não são armazenados por este serviço após o envio;</li>
          <li>Não são compartilhados com outros serviços.</li>
        </ul>
        <p>
          Consulte a política do EmailJS <a 
          href="https://www.emailjs.com/legal/privacy-policy/" 
          target="_blank" 
          rel="noopener noreferrer">
            aqui
          </a>.
        </p>
      </section>

      {/* Seção 4 - Direitos */}
      <section>
        <h2>4. Controle Seus Dados</h2>
        <p>
          Você pode:
        </p>
        <ul>
          <li>Solicitar a exclusão do seu e-mail a qualquer momento;</li>
          <li>Retificar ou atualizar suas informações.</li>
        </ul>
        <p>
          Basta entrar em contato via:
        </p>
        <ul>
          <li>E-mail: <a href="mailto:dev.contactandre@gmail.com">dev.contactandre@gmail.com</a></li>
          <li>LinkedIn: <a 
            href="https://www.linkedin.com/in/andr%C3%A9-moreira-940886233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"
            target="_blank" 
            rel="noopener noreferrer">
              @andre-moreira
            </a></li>
        </ul>
      </section>

      {/* Seção 5 - Atualizações */}
      <section>
        <h2>5. Alterações</h2>
        <p>
          Esta política pode ser atualizada. A versão mais recente estará sempre nesta página.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;