import "./notfoundpage.css";
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404 - Página no encontrada</h1>
            <p className="not-found-text">La ruta que intentas acceder no existe.</p>
            
            <img 
                src="https://i.pinimg.com/originals/7a/8b/e1/7a8be12b3f3384ebce47064ab728282c.gif" 
                alt="Página no encontrada"
                className="not-found-gif"
            />
            
            <button
                className="back-button"
                onClick={() => navigate('/')}
            >
                Volver al inicio
            </button>
        </div>
    );
}

export default NotFoundPage;