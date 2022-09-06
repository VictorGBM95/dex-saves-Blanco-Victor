import { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
    const [counter, setCounter] = useState(0); //hook

    return (
        <>
        {greeting}
        <ItemCount />
        </>
    );
}
export default ItemListContainer;