import { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import Item from "./Item/Item";

const ItemListContainer = ({manuales}) => {

    return (
        <div className="container-lg my-4 main">
        <div className="row">
        {
            manuales.map((manual) => {
                return(
                    <Item manual={manual} />
                )
            })
        }
        </div>
        </div>
    );
}
export default ItemListContainer;