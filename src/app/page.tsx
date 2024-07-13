"use client";
import React, {useState} from 'react';
import Login from "./components/login";
import Cadastro from "./components/cadastro";

const Page: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'login' | 'cadastro'>('login');

  const renderPage = () => {
      if (currentPage === 'login') {
          return <Login goToCadastro={() => setCurrentPage('cadastro')} />;
      } else if (currentPage === 'cadastro') {
          return <Cadastro goToLogin={() => setCurrentPage('login')} />;
      }
  };

  return (
      <div>
          {renderPage()}
      </div>
  );
}

export default Page;
