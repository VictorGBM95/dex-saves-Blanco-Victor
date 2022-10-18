const Home = () => {

    return (
    <main className="container my-4" style={{"background": "rgb(54, 0, 0, 0.8)"}}>
            <section className="row">
                <div className="col-md-12 text-center">
                    <h1 className="display-2">Bienvendidos a Dex Saves</h1>
                    <p className="fs-3">Acá encontrarás todo lo necesario para vivir la mejor experiencia en tus juegos de
                        rol.
                        Especializados en <em>Dungeons and Dragons</em> y <em>Call of Cthulhu</em></p>
                </div>
            </section>
            <section className="row p-3 my-5">
                <div className="col-md-6">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HzTwsEF4Cco"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h2 className="display-3">Dungeons and Dragons</h2>
                        <p className="fs-4">Échale un vistazo a este legendario juego de rol de fantasía y averigua por qué hay
                            millones de personas en todo el mundo que se ponen en la piel de poderosos héroes para crear sus
                            propias historias.</p>
                    </div>
                </div>
            </section>
            <section className="row p-3 my-5">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="text-end">
                        <h4 className="display-3">Aventuras Compartidas</h4>
                        <p className="fs-4">El juego de rol Dungeons & Dragons (D&D) consiste en contar historias en mundos
                            fantásticos de espadas y brujería y un grupo de leales compañeros es esencial para adentrarte en
                            la aventura.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="../images/VoxMachina.png" alt="VoxMachina" className="img-fluid"/>
                </div>
            </section>
            <section className="row p-3 my-5">
                <div className="col-md-6">
                    <img src="../images/Wallpaper2.jpg" alt="Fantasy World" className="img-fluid"/>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h2 className="display-3">Tu Mundo, <br/> Tus Reglas</h2>
                        <p className="fs-4">Al igual que en los juegos de niños en los que se finge ser personajes ficticios, el
                            motor de D&D es la imaginación.

                            En este mundo fantástico, las posibilidades son ilimitadas.</p>
                    </div>
                </div>
            </section>
            <section className="row p-3 my-5">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="text-end">
                        <h2 className="display-3">Lo Necesario</h2>
                        <p className="fs-4">La preparación lo es todo. Acá podrás abastecerte con todo lo que necesites para
                            poder darle vida a tus aventuras en el fantástico mundo de Dungeons and Dragons </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="images/Essentials.jpeg" alt="Marte" className="img-fluid"/>
                </div>
            </section>
            <section className="row p-3 my-5">
                <div className="col-md-12 text-center">
                    <h2 className="display-4">Nuestros Productos</h2>
                </div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/DnD-Books.jpg" className="d-block w-100 img-fluid"
                                alt="DnD-Books" style={{"height": "32rem"}}/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/VoxMachinaMinis.jpg" className="d-block w-100"
                                alt="VoxMachinaMinis" style={{"height": "32rem"}}/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/Call-of-Cthulhu-Starter-Set.png"
                                className="d-block w-100" alt="Call-of-Cthulhu-Starter-Set" style={{"height": "32rem"}}/>
                        </div>
                        <div className="carousel-item">
                            <img src="images/Dice.jpg" className="d-block w-100" alt="Dice"
                                style={{"height": "32rem"}}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Home;