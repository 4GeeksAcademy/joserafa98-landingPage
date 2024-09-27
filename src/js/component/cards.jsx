import React from "react";

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

    return (
        <div className="cards container">
            <h1 className="text-center p-4">Ver ahora...</h1>
            <div className="row flex-nowrap">
                {cardsData.map((card, index) => (
                    <div key={index} className="card mx-2">
                        <img src={card.imgUrl} className="card-img-top" alt={card.title} />
                        <div className="card__content">
                            <p className="card__title">{card.title}</p>
                            <p className="card__description">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Cards;
