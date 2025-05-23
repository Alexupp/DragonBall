import './FemeninoPage.css'
import Header from "../../Components/Header/header";
import Card from '../../Components/Card/card';
import Navbar from '@components/NavBar/Navbar';
import { useState, useEffect } from 'react';
import Footer from "../../Components/Footer/Footer";

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
                        id={item.id} // ✅ este es el fix importante
                        nombre={item.name}
                        img={item.image}
                        especie={item.race}
                    />

                ))}
            </main>
            <Footer />
        </>
    )
}

export default FemeninoPage;
