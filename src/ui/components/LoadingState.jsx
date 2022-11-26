export const LoadingState = () => {
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <div className="row">
                    <div className="spinner-border text-primary" style={{width: "3.3rem", height: "3.3rem"}} role="status" >
                        <span className="visually-hidden" > Loading...</span >
                    </div>
                </div>
                <div className="row mt-3">
                    <h3 className="text-primary"><b>CARGANDO...</b></h3>
                </div>
            </div>
        </div>
    )
}
