import './FemeninoPage.css'
import Header from "../../Components/Header/header";
import Card from '../../Components/Card/card';
import Navbar from "../../Components/NavBar/Navbar";
import { useState, useEffect } from 'react';

function FemeninoPage() {
    const [arrayObjects, setArrayObjects] = useState([])

    const filterByGenderFemale = (items) => {
        return items.filter(item => item.gender === "Female");
    };

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters?limit=1000')
            .then((response) => response.json())
            .then((data) => {
                setArrayObjects(filterByGenderFemale(data.items));
            });
    }, []);

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
        </>
    )
}

export default FemeninoPage;
