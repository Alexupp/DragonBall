import "./PersonajePage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
                setPersonaje(data); // ✅ fix acá
            })
            .catch((err) => console.error("Error al cargar personaje:", err));
    }, [id]);

    if (!personaje) {
        console.log("personaje aún no cargado:", personaje);
        return <p>Cargando personaje...</p>;
    }

    console.log("Renderizando personaje:", personaje);

    return (
        <main className="personaje-detalle">
            <div className="card-personaje">
                <img src={personaje.image} alt={personaje.name} />
                <div className="card-content">
                    <h1>{personaje.name}</h1>
                    <p><strong>Raza:</strong> {personaje.race}</p>
                    <p><strong>Género:</strong> {personaje.gender}</p>
                    <p><strong>Ki Base:</strong> {personaje.ki}</p>
                    <p><strong>Ki Máximo:</strong> {personaje.maxKi}</p>
                    <p><strong>Afiliación:</strong> {personaje.affiliation}</p>
                    <Link className="back-link" to="/">← Volver</Link>
                </div>
            </div>
        </main>
    );
    
};

export default PersonajePage;
