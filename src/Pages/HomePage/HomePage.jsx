import './HomePage.css';
import Header from "../../Components/Header/header";
import Card from "../../Components/Card/card";
import Navbar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer';

import { useState, useEffect, useCallback } from 'react';

function HomePage() {
    const [arrayObjects, setArrayObjects] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    const fetchCharacters = useCallback(async (pageToFetch) => {
        setIsFetching(true);
        try {
            const response = await fetch(`https://dragonball-api.com/api/characters?page=${pageToFetch}`);
            const data = await response.json();

            // Si estamos en la primera página, limpiamos el array
            if (pageToFetch === 1) {
                setArrayObjects(data.items);
            } else {
                // Si no es la primera página, agregamos los personajes
                setArrayObjects((prev) => {
                    const newItems = data.items.filter(item => !prev.some(existingItem => existingItem.id === item.id));
                    return [...prev, ...newItems];
                });
            }

            setTotalPages(data.meta.totalPages);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsFetching(false);
        }
    }, []);

    useEffect(() => {
        fetchCharacters(page);
    }, [page, fetchCharacters]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollTop + windowHeight >= documentHeight - 100 && !isFetching && page < totalPages) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFetching, page, totalPages]);

    return (
        <>
            <Navbar />
            <Header />
            <main
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '32px',
                    padding: '32px',
                    justifyItems: 'center',
                    backgroundColor: '#1f1f25'
                }}
            >
                {arrayObjects.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        nombre={item.name}
                        img={item.image}
                        especie={item.race}
                    />
                ))}
            </main>
            {isFetching && (
                <p style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                    Cargando más personajes...
                </p>
            )}
            <Footer />
        </>
    );
}

export default HomePage;
