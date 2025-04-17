import "./Footer.css";
import { FaGithub, FaInstagram, FaHeart } from "react-icons/fa"; // Cambiado FaLinkedin por FaInstagram

const Footer = () => {
    return (
        <footer className="footer">
            <div class="footer-stats">
                <span>CHARACTERS: 58</span>
                <span>TRANSFORMATIONS: 49</span>
                <span>PLANETS: 20</span>
            </div>
            <div class="footer-line"></div>

            <p className="server-status">
                SERVER STATUS: <span className="status-dot">🟢</span>
            </p>

            <div className="footer-logos">
                <div className="powered">
                    <span>powered by</span>
                    <img src="/aws.png" alt="AWS" />
                </div>
                <div className="deploys">
                    <img src="/footerneflity.png" alt="Netlify" />
                </div>
            </div>

            <div className="footer-icons">
                <a href="https://github.com/Alexupp" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/alexander_correa31/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <FaHeart className="heart" />
            </div>

            <p className="footer-credit">
                <span>&lt;&gt;</span> by <strong>Alexander Pérez Correa</strong> <span>2025</span>
            </p>
        </footer>
    );
};

export default Footer;
