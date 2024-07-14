"use client";

import React from "react";
import "~/styles/cadastro.css";

interface CadastroProps {
  goToLogin: () => void;
}

const Cadastro: React.FC<CadastroProps> = ({ goToLogin }) => {
  return (
    <div className="page-container">
      <div className="signup-container">
        <h2>Cadastro</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <div className="login-link">
          <p>
            Já tem uma conta?{" "}
            <a href="/login" onClick={goToLogin}>
              Faça login
            </a>
          </p>
        </div>
      </div>
      <div className="home-link">
        <a href="/">Voltar à página inicial</a>
      </div>
    </div>
  );
};

export default Cadastro;
