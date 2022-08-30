const Curso = (props) => {
    return (
    <>
        <h2>{props.name}</h2>
        <p>Profesor: {props.teacher}</p>
        <p>Duración: {props.duration} semanas</p>
    </>
    );
}

export default Curso