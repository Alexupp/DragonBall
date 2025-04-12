
import './App.css'
import Header from "./Components/Header/header";
import CharacterCard from './Components/Card/card';
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from 'react';


function App() {
  const [arrayObjects, setArrayObjects] = useState([])
  const [totalPages, setTotalPages] = useState(1)

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

      <Header />
      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(345px, 1fr))',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: '#f3f4f6'
      }}>
        {arrayObjects.map((item) => (
          <CharacterCard
            key={item.id}
            name={item.name}
            image={item.image}
            race={item.race}
            gender={item.gender}
            ki={item.ki}
            maxKi={item.maxKi}
            affiliation={item.affiliation}
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
