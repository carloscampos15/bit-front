import { Link } from 'react-router-dom';

export const Message = ({ message }) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
            <div className="alert alert-info alert-dismissible p-4" role="alert">
                <h1><b>Ups...</b></h1>
                <h4>{message}</h4>
                <hr />
                <Link className='btn btn-outline-dark' to="/applications">Regresar a los sectores</Link>
            </div>
        </div>
    )
}