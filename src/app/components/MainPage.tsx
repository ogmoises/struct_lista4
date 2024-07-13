import React from 'react';
import '~/styles/mainpage.css';

const MainPage: React.FC = () => {
    return (
        <div className="main-page-div">
            <div className="left-div">
                <p className="xstock">XSTOCK</p>
                <p className="p-main">O controle de estoque que você precisa.</p>
                <p className="p-sub">Organize seus produtos de maneira rápida e eficaz!</p>
            </div>
            <div className="right-div">
                <div className="image">
                    <img className="img-landing" src='/images/XSTOCK.webp' alt="Imagem Serviço" />
                </div>
                <div className="button">
                    <a href="#down">
                        <button className="button-action">Saiba mais</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainPage;