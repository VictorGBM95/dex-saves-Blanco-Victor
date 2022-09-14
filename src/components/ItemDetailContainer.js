const ItemDetailContainer = ({item}) => {

    console.log(item);
    return (
        <div className="container-lg my-4 main details">
        <div className="col-md-4 shop__item">
                    <div className="p-5 my-3 text-light">
                        <div>
                            <img className="img-fluid" src={item.imgSrc} height="100%"></img>
                        </div>
                        <h5>{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">${item.price}</p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default ItemDetailContainer;