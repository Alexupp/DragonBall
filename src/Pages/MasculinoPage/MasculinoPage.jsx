import './MasculinoPage.css'
import Header from "../../Components/Header/header";
import Card from '../../Components/Card/card';
import Pagination from '@mui/material/Pagination';
import Navbar from "../../Components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    const [arrayObjects, setArrayObjects] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    // Función para filtrar por género masculino
    const filterByGenderMale = (items) => {
        return items.filter(item => item.gender === "Male");
    };

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
            .then((response) => response.json())
            .then((data) => {
                setArrayObjects(filterByGenderMale(data.items));
                setTotalPages(data.meta.totalPages);
            });
    }, []);

    const handlePagination = (event, page) => {
        fetch(`https://dragonball-api.com/api/characters?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setArrayObjects(filterByGenderMale(data.items));
            });
    };

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
                        nombre={item.name}
                        img={item.image}
                        especie={item.race}
                    />
                ))}
            </main>

            <div id="pagination">
                <Pagination onChange={handlePagination} count={totalPages} variant="outlined" shape="rounded" />
            </div>
        </>
    )
}

export default App
