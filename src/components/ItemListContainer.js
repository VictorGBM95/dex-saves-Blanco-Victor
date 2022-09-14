import { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import Item from "./Item/Item";

const ItemListContainer = ({items}) => {

    return (
        <div className="container-lg my-4 main">
        <div className="row">
        {
            items && items.length > 0 && items.map((item) => {
                return(
                    <Item item={item} />
                )
            })
        }
        </div>
        </div>
    );
}
export default ItemListContainer;