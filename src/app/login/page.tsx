"use client";

import { signIn } from 'next-auth/react';
import React from 'react';
import '~/styles/login.css';

interface LoginProps {
    goToCadastro: () => void;
}

const Login: React.FC<LoginProps> = ({ goToCadastro }) => {
    return (
        <div className="page-container">
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Usuário</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="button" onClick={() => signIn('google')}>Entrar com Google</button>
                </form>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href="/cadastro" onClick={goToCadastro}>Cadastre-se</a></p>
                </div>
            </div>
            <div className="home-link">
                <a href="/">Voltar à página inicial</a>
            </div>
        </div>
    );
}

export default Login;
