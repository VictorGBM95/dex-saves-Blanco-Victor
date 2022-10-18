import ItemListContainer from '../components/ItemListContainer';



const Miniaturas = ({items}) => {
    return (
        <>
            <ItemListContainer category={"minis"} items={items} />
        </>
    );
}

export default Miniaturas;