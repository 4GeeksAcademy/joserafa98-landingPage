import React from "react";
const Cards =()=>{
    return (
        <>
        <div className="row justify-content-center">
            <h1 className="mx-auto p-4">Ver ahora...</h1>
        <div className="card col-3 mx-2" style={{ width: '18rem' }}>
        <img src="https://pics.filmaffinity.com/one_piece-647985949-large.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">One Piece</h5>
            <p className="card-text">Un joven pirata con poderes elásticos, Luffy, y su tripulación, los Sombrero de Paja, navegan en busca del legendario tesoro "One Piece". Enfrentan enemigos peligrosos y descubren misterios en un mundo lleno de islas exóticas. ¡Únete a la aventura más épica de los mares!</p>
            <a href="#" className="btn btn-danger">Ver ahora mismo</a>
        </div>
    </div>
    
    <div className="card col-3 mx-2" style={{ width: '18rem' }}>
        <img src="https://pics.filmaffinity.com/Dragon_Ball_Z_Serie_de_TV-697937148-large.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Dragon Ball</h5>
            <p className="card-text">Goku y sus amigos defienden la Tierra de poderosos villanos en épicas batallas llenas de energía y transformaciones. ¡Aventuras cósmicas y combates explosivos te esperan en Dragon Ball Z!</p>
            <a href="#" className="btn btn-danger">Ver ahora mismo</a>
        </div>
    </div>   
    
    <div className="card col-3 mx-2" style={{ width: '18rem' }}>
        <img src="https://pics.filmaffinity.com/naruto-409273531-mmed.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Naruto</h5>
            <p className="card-text">Naruto, un ninja con un poderoso espíritu y un sueño de ser Hokage, enfrenta enemigos mortales y descubre los secretos de su oscuro pasado. ¡Sumérgete en emocionantes batallas y una historia llena de amistad y determinación!</p>
            <a href="#" className="btn btn-danger">Ver ahora mismo</a>
        </div>
    </div>

    <div className="card col-3 mx-2" style={{ width: '18rem' }}>
        <img src="https://pics.filmaffinity.com/Bleach_Serie_de_TV-235942666-large.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Bleach</h5>
            <p className="card-text">Ichigo Kurosaki, un adolescente con el poder de un Shinigami, lucha contra espíritus malignos y descubre oscuros secretos en el mundo espiritual. ¡Acompáñalo en batallas épicas y un viaje lleno de acción y misterio!</p>
            <a href="#" className="btn btn-danger">Ver ahora mismo</a>
        </div>
    </div>   
    </div>
    </>
    )
};
export default Cards