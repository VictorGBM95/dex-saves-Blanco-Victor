const Contacto = () => {

    return (
        <main style={{ "fontWeight": "400", "background": "rgb(54, 0, 0, 0.8)" }}>
            <div className="container-lg my-4">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column align-items-center">
                            <div>
                                <h3>Contacto</h3>
                            </div>
                            <div>
                                <p>Estamos para servirte en las siguientes redes:</p>
                            </div>
                            <div className="redes">
                                <div><a href="https://es-la.facebook.com/" target="_blank"><img
                                    src="/images/FacebookWhite.jpg" width="30px" height="30px"
                                    alt="Nuestro Facebook" /></a>
                                    Facebook</div>
                                <div><a href="https://www.instagram.com/" target="_blank"><img
                                    src="/images/InstagramWhite.png" alt="Nuestro Instagram" width="30px"
                                    height="30px" /></a>
                                    Instagram</div>
                                <div><a style={{ "textDecoration": "none" }} href="https://www.twitter.com/"
                                    target="_blank"><img src="/images/TwitterWhite.png" alt="Nuestro Twitter"
                                        width="30px" height="30px" /></a>
                                    Twitter</div>
                                <div><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                                    <img src="/images/YoutubeWhite.png" alt="El Mejor Video de la Historia"
                                        width="31px" height="31px" /></a> YouTube</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <form id="form" action="">
                                <fieldset className="fieldset">
                                    <legend style={{ "fontSize": "x-large" }}>Newsletter</legend>
                                    <p>Suscríbete a nuestro newsletter y entérate de cuando tengamos más productos que
                                        sean de
                                        tu interés.</p>
                                    Nombre y Apellido: <br />
                                    <input id="names" type="text" placeholder="Matthew Mercer" /> <br />
                                    Email: <br />
                                    <input id="email" type="email" placeholder="mattmercer@critrole.com" /> <br />
                                    Teléfono (Opcional): <br />
                                    <input id="telefono" type="tel" name="telefono" placeholder="1135859875" /> <br />
                                    Comentarios o información adicional: <br /> <textarea name="comentarios"
                                        id="comentarios" cols="60" rows="7"></textarea> <br />
                                    <input id="cb1" className="btn btn-secondary" type="submit" value="Enviar" />
                                    <input className="btn btn-secondary" type="reset" value="Limpiar" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contacto;