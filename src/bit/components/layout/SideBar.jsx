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
                        to="/applications"
                    >
                        <span>Solicitudes</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className={({ isActive }) => `nav-link ${!isActive ? 'collapsed' : ''}`}
                        to="/users"
                    >
                        <span>Usuarios</span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}
