import React, { useState } from "react";

const Cards = () => {
    const cardsData = [
        {
            title: "One Piece",
            description: "Un joven pirata con poderes elásticos...",
            imgUrl: "https://pics.filmaffinity.com/one_piece-647985949-large.jpg"
        },
        {
            title: "Dragon Ball",
            description: "Goku y sus amigos defienden la Tierra...",
            imgUrl: "https://pics.filmaffinity.com/Dragon_Ball_Z_Serie_de_TV-697937148-large.jpg"
        },
        {
            title: "Naruto",
            description: "Naruto, un ninja con un poderoso espíritu...",
            imgUrl: "https://pics.filmaffinity.com/naruto-409273531-mmed.jpg"
        },
        {
            title: "Bleach",
            description: "Ichigo Kurosaki, un adolescente con el poder...",
            imgUrl: "https://pics.filmaffinity.com/Bleach_Serie_de_TV-235942666-large.jpg"
        },
        {
            title: "Attack on Titan",
            description: "Eren y sus amigos luchan contra los titanes...",
            imgUrl: "https://pics.filmaffinity.com/Ataque_a_los_Titanes_Serie_de_TV-890399004-large.jpg"
        },
        {
            title: "My Hero Academia",
            description: "Izuku Midoriya, un joven sin poderes...",
            imgUrl: "https://pics.filmaffinity.com/My_Hero_Academia_Serie_de_TV-340675272-large.jpg"
        },
        {
            title: "Record Of Ragnarok",
            description: "Humanos legendarios como Adán y Jack el Destripador enfrentan...",
            imgUrl: "https://pics.filmaffinity.com/Record_of_Ragnarok_Serie_de_TV-357029158-large.jpg"
        },
        {
            title: "Fullmetal Alchemist",
            description: "Los hermanos Elric buscan la piedra...",
            imgUrl: "https://pics.filmaffinity.com/Fullmetal_Alchemist_Serie_de_TV-577038341-large.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(""); 
    

    const cardsPerPage = 4;
    const totalPages = Math.ceil(cardsData.length / cardsPerPage);

    const goToNext = () => {
        setDirection("next");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const goToPrevious = () => {
        setDirection("prev");
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const startIndex = currentIndex * cardsPerPage;
    const currentCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

    return (
        <div className="cards container">
            <h1 className="text-center p-4">Ver ahora...</h1>
            <div className={`row justify-content-center transition-${direction}`}>
                {currentCards.map((card, index) => (
                    <div key={index} className="card col-md-3 mx-2" style={{ width: '18rem' }}>
                        <img src={card.imgUrl} className="card-img-top" alt={card.title} />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.description}</p>
                            <a href="#" className="btn btn-danger">Ver ahora mismo</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-outline-secondary" onClick={goToPrevious}>Previous</button>
                <button className="btn btn-outline-secondary" onClick={goToNext}>Next</button>
            </div>
        </div>
    );
};

export default Cards;

