import React from 'react'

export const AuthLayout = ({ children }) => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="row shadow bg-white rounded m-3">
                    <div
                        className="col-md-5 col-sm-12 col-xs-12 p-5 d-flex justify-content-end flex-column rounded"
                        style={{ backgroundImage: `url(/assets/images/fondo.webp)`, backgroundSize: 'cover' }}
                    >
                        <h1 className='text-white text-end fw-bold text-uppercase'>INICIO DE SESIÓN</h1>
                    </div>
                    <div className="col-md-7 col-sm-12 col-xs-12 px-5 py-5">
                        <div className='text-center'>
                            <img className='text-center mb-4' src="/assets/images/logo.png" width="190" alt="logo bit" />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
