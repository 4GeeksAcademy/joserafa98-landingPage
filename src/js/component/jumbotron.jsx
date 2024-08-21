import React, { useState } from "react";

const Jumbotron = () => {
    const [currentJumbotron, setCurrentJumbotron] = useState(0);

    const jumbotrons = [
        {
            title: "Novedades sobre el final de One Piece",
            text: "En el One Piece Day, celebrado este 10 y 11 de agosto, nos dieron pistas hacia donde va el final de la obra.",
            buttonText: "Conoce más aquí",
            backgroundImage: "https://sm.ign.com/t/ign_es/gallery/t/the-one-pi/the-one-piece-concept-art_jkyj.600.jpg"
        },
        {
            title: "Apóyanos a convertirnos en una plataforma de streaming top!",
            text: "Con tus aportes podemos contratar las licencias de tus obras favoritas y compartirlas contigo gratuitamente.",
            buttonText: "Conoce más aquí",
            backgroundImage: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/01/cuanto-cuesta-netflix-disney-hbo-max-prime-video-skyshowtime-resto-plataformas-streaming-2023-2927180.jpg"
        },
        {
            title: "Pronto tendremos Dragon Ball Daima",
            text: "This is the third jumbotron, showcasing another piece of information.",
            buttonText: "Conoce más aquí",
            backgroundImage: "https://otakus-dream.com/wp-content/uploads/2024/05/Dragon-Ball-Daima-3.jpg"
        },
    ];

    const goToNext = () => {
        setCurrentJumbotron((prevIndex) => (prevIndex + 1) % jumbotrons.length);
    };

    const goToPrevious = () => {
        setCurrentJumbotron((prevIndex) => (prevIndex - 1 + jumbotrons.length) % jumbotrons.length);
    };

    return (
        <div className="jumbotron-container">
            <div className="jumbotron-inner" style={{ transform: `translateX(-${currentJumbotron * 100}%)` }}>
                {jumbotrons.map((jumbotron, index) => (
                    <div
                        key={index}
                        className="jumbotron"
                        style={{ backgroundImage: `url(${jumbotron.backgroundImage})` }}
                    >
                        <div className="container-fluid py-5 ">
                            <h1 className="display-5 fw-bold">{jumbotron.title}</h1>
                            <p className="col-md-8 fs-4">{jumbotron.text}</p>
                            <button className="btn btn-primary btn-lg" type="button">
                                {jumbotron.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-outline-secondary m-2" onClick={goToPrevious}>Previous</button>
                <button className="btn btn-outline-secondary m-2" onClick={goToNext}>Next</button>
            </div>
        </div>
    );
};

export default Jumbotron;

