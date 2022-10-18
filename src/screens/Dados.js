import ItemListContainer from '../components/ItemListContainer';


const Dados = ({items}) => {

    return (
        <>
            <ItemListContainer category={"dados"} items={items} />
        </>
    );
}

export default Dados;