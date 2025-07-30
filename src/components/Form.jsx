import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Form({ buttonText }) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [status, setStatus] = useState(null);
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);
  
  function handleChange(e) {
    const value = e.target.value;
    setEmail(value);
    setIsValid(emailRegex.test(value));
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    if (!isValid) return;
    
    const templateParams = { email };
    
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        setStatus('success');
        setEmail('');
      })
      .catch(() => {
        setStatus('error');
      });
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={handleChange}
          className={
            email.length === 0
              ? ''
              : isValid
              ? 'input-valid'
              : 'input-invalid'
          }
        />
      </div>
      <div>
        <button type="submit" disabled={!isValid}>
          {buttonText}
        </button>
      </div>
      {status === 'success' && (
        <p className="success">Mensagem enviada com sucesso. Agradeço pela confiança e entrarei em contato em breve!</p>
      )}
      {status === 'error' && (
        <p className="error">Ops! Algo deu errado no envio. Por favor, tente novamente ou me contate diretamente.</p>
      )}
    </form>
  );
}

export default Form;
