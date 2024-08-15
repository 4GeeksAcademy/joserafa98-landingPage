import React, { useState } from "react";

const Jumbotron = () => {
    const [currentJumbotron, setCurrentJumbotron] = useState(0);

    const jumbotrons = [
        {
            title: "Novedades sobre el final de One Piece",
            text: "En el One Piece Day, celebrado este 10 y 11 de agosto, nos dieron pistas hacia donde va el final de la obra.",
            buttonText: "Conoce más aquí"
            
        },
        {
            title: "Apoyanos a convertirnos en una plataforma de streaming top!",
            text: "Con tus aportes podemos contratar las licencias de tus obras favoritas y compartirlas contigo gratuitamente.",
            buttonText: "Conoce más aquí"
            
        },
        {
            title: "Pronto tendremos Dragon Ball Daima",
            text: "This is the third jumbotron, showcasing another piece of information.",
            buttonText: "Conoce más aquí"
            
        }
    ];

    const goToNext = () => {
        setCurrentJumbotron((prevIndex) => (prevIndex + 1) % jumbotrons.length);
    };

    const goToPrevious = () => {
        setCurrentJumbotron((prevIndex) => (prevIndex - 1 + jumbotrons.length) % jumbotrons.length);
    };

    return (
        <div className="container py-4">
            <header className="pb-3 mb-4 border-bottom"></header>
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{jumbotrons[currentJumbotron].title}</h1>
                    <p className="col-md-8 fs-4">{jumbotrons[currentJumbotron].text}</p>
                    <button className="btn btn-danger btn-lg" type="button">
                        {jumbotrons[currentJumbotron].buttonText}
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-outline-secondary" onClick={goToPrevious}>Previous</button>
                <button className="btn btn-outline-secondary" onClick={goToNext}>Next</button>
            </div>
        </div>
    );
}

export default Jumbotron;
