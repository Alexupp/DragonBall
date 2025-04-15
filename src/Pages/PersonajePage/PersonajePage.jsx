import "./PersonajePage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Card from "../../Components/Card/card";

const CharacterPage = () => {
    const [data, setData] = useState([]);

    let { races } = useParams();

    useEffect(() => {
        fetch(`https://dragonball-api.com/api/characters?limit=100`)
            .then((response) => response.json())
            .then((char) => setData(char.items))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    let tmp = null;
    if (races === "not human") {
        tmp = data.filter((elem) => elem.race !== "Human");
    } else {
        tmp = data.filter((elem) => elem.race === races);
    }

    return (
        <main id="character-page">
            <h1 id="title-character">CHARACTER</h1>
            <div id="characters-species">
                {tmp.map((element) => (
                    <div key={element.id}>
                        <Link to={"/details/" + element.id}>
                            <Card
                                img={element.image}
                                nombre={element.name}
                                especie={element.race}
                                genero={element.gender}
                                baseKi={element.ki}
                                totalKi={element.maxKi}
                                affiliation={element.affiliation}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default CharacterPage;
