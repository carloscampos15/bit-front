import { NavLink } from 'react-router-dom';

export const SideBar = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${!isActive ? 'collapsed' : ''}`}
                        to="/"
                    >
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${!isActive ? 'collapsed' : ''}`}
                        to="/sectors"
                    >
                        <span>Sectores</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${!isActive ? 'collapsed' : ''}`}
                        to="/clients"
                    >
                        <span>Clientes</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${!isActive ? 'collapsed' : ''}`}
                        to="/contacts"
                    >
                        <span>Contactos</span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
