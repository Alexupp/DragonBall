import "./PersonajePage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from '../../Components/NavBar/Navbar';

const PersonajePage = () => {
    const { id } = useParams();
    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {
        if (!id) return;

        console.log("ID recibido por useParams:", id);
        console.log(`Cargando personaje con ID: ${id}`);

        fetch(`https://dragonball-api.com/api/characters/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Respuesta de la API:", data);
                setPersonaje(data);
            })
            .catch((err) => console.error("Error al cargar personaje:", err));
    }, [id]);

    if (!personaje) {
        console.log("personaje aún no cargado:", personaje);
        return <p>Cargando personaje...</p>;
    }

    console.log("Renderizando personaje:", personaje);

    return (
        <>
            <Navbar />
            <main className="personaje-detalle">
                <div className="card-personaje">
                    <div className="imagen-fondo-container">
                        <img src={personaje.image} alt={personaje.name} />
                    </div>

                    <div className="card-content">
                        <h1>{personaje.name}</h1>
                        <p><strong>Raza:</strong> {personaje.race}</p>
                        <p><strong>Género:</strong> {personaje.gender}</p>
                        <p><strong>Ki Base:</strong> {personaje.ki}</p>
                        <p><strong>Ki Máximo:</strong> {personaje.maxKi}</p>
                        <p><strong>Afiliación:</strong> {personaje.affiliation}</p>
                    </div>
                </div>

                {/* Card para las transformaciones */}
                {personaje.transformations && personaje.transformations.length > 0 && (
                    <div className={`card-transformaciones ${personaje.name === "Goku" ? "transformaciones-goku" : ""}`}>
                        <h2>- - Transformaciones - -</h2>
                        <div className="transformaciones-grid">
                            {personaje.transformations.map((trans) => (
                                <div key={trans.id} className="card-transformacion">
                                    <div className="transformacion-img-container">
                                        <img src={trans.image} alt={trans.name} />
                                    </div>
                                    <h3>{trans.name}</h3>
                                    <p><strong>Ki:</strong> {trans.ki}</p>
                                </div>

                            ))}
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default PersonajePage;
