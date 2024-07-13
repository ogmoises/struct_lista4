import React from 'react';
import '~/styles/header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <a className="logo" href="/landing-page">XS</a>
      <nav className="navbar">
        <a href="#">Início</a>
        <a href="#redesfooter">Contato</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}

export default Header;