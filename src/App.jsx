import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


export default function App() {

  return (
    <div>
      {/* Cabeçalho do Portfólio */}
      <Header />

      {/* Conteúdo Principal do Portfólio */}
      <Content />

      {/* Rodapé do Portfólio */}
      <Footer />
    </div>
  );
}
