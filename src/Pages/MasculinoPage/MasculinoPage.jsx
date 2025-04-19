import './MasculinoPage.css';
import Header from "../../Components/Header/header";
import Card from '../../Components/Card/card';
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useState, useEffect, useCallback } from 'react';

function MasculinoPage() {
    const [arrayObjects, setArrayObjects] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    const filterByGenderMale = (items) => {
        return items.filter(item => item.gender === "Male");
    };

    const fetchCharacters = useCallback(async (pageToFetch) => {
        setIsFetching(true);
        try {
            const response = await fetch(`https://dragonball-api.com/api/characters?page=${pageToFetch}`);
            const data = await response.json();
            const filteredItems = filterByGenderMale(data.items);

            setArrayObjects((prev) => {
                const newItems = filteredItems.filter(
                    item => !prev.some(existing => existing.id === item.id)
                );
                return [...prev, ...newItems];
            });

            setTotalPages(data.meta.totalPages);
        } catch (error) {
            console.error("Error fetching characters:", error);
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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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

export default MasculinoPage;
