import './HomePage.css';
import Header from "../../Components/Header/header";
import Card from "../../Components/Card/card";
import Pagination from '@mui/material/Pagination';
import Navbar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer';


import { useState, useEffect } from 'react';

function HomePage() {
    const [arrayObjects, setArrayObjects] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
            .then((response) => response.json())
            .then((data) => {
                setArrayObjects(data.items);
                setTotalPages(data.meta.totalPages);
            });
    }, []);

    const handlePagination = (event, page) => {
        fetch(`https://dragonball-api.com/api/characters?page=${page}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setArrayObjects(data.items);
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
                {arrayObjects.map((item) => {
                    console.log("Item:", item);
                    return (
                        <Card
                            key={item.id}
                            id={item.id}
                            nombre={item.name}
                            img={item.image}
                            especie={item.race}
                        />
                    );
                })}

            </main>

            <div id="pagination">
                <Pagination onChange={handlePagination} count={totalPages} variant="outlined" shape="rounded" />
            </div>

            <Footer />
        </>
    );
}

export default HomePage;
