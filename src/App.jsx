import React from 'react';
import Header from './Header';
import Content from './Content';

export default function App() {

  return (
    <div>
      {/* Cabeçalho do Portfólio */}
      <Header />

      {/* Conteúdo Principal do Portfólio */}
      <Content />
    </div>
  );
}