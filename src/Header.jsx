import React from 'react';
import Menu from './components/Menu';

function Header() {

  return (
    <>
    <header className="header">
      <div className="header-content">
        {/* Menu de navegação principal */}
        <Menu />
      </div>
    </header>
    </>
  );
};
export default Header;