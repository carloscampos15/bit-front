import { List } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { startLogout } from './../../../store/auth/thunks';

export const NavBar = () => {

    const dispatch = useDispatch();
    const { username } = useSelector(state => state.auth)

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <div className="logo d-flex align-items-center">
                    <span className="d-none d-lg-block">BIT</span>
                </div>
                <List
                    className="bi bi-list toggle-sidebar-btn"
                    onClick={() => document.querySelector("body").classList.toggle('toggle-sidebar')}
                />
            </div>
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">
                    <li className="nav-item dropdown pe-3">
                        <a
                            className="nav-link nav-profile d-flex align-items-center pe-0"
                            href="#"
                            data-bs-toggle="dropdown"
                        >
                            <span className="d-md-block dropdown-toggle text-capitalize ps-2">{username}</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6 className='text-capitalize'>{username}</h6>
                                <span>(role)</span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <button
                                    onClick={onLogout}
                                    className="dropdown-item d-flex align-items-center"
                                >
                                    <i className="bi bi-person"></i> <span>Cerrar sesión</span>
                                </button>
                            </li>
                        </ul>

                    </li>
                </ul>
            </nav>
        </header>
    )
}
