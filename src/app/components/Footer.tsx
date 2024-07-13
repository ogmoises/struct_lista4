import React from 'react';
import '~/styles/footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div>
                <ul id="redesfooter" className="iconsredes">
                    <li><a href="#"><img className="iconinsta" src="/images/instagram.png" alt="instagram"/></a></li>
                    <li ><a href="#"><img className="iconface" src="/images/facebook.png" alt="facebook"/></a></li>
                    <li><a href="#"><img className="iconyou" src="/images/youtube.png" alt="youtube"/></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;