import ItemCount from '../components/ItemCount/ItemCount.js'
import { db } from '../utils/firebaseConfig';
import firestoreFetch from '../utils/firestoreFetch';
const ItemDetailContainer = ({item, handleCounter}) => {
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
                        <ItemCount handleCounter={handleCounter}/>
                    </div>
                </div>
        </div>
    );
}
export default ItemDetailContainer;