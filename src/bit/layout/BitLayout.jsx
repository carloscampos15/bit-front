import { NavBar } from './../components/Layout/NavBar';
import { SideBar } from '../components/Layout/SideBar';
import { Link } from 'react-router-dom';

export const BitLayout = ({ children, title = '', subtitle = '', returnRoute = '' }) => {
    return (
        <>
            <NavBar />

            <SideBar />

            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>{title}</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Inicio</Link>
                            </li>
                            <li className={`breadcrumb-item ${subtitle == '' ? 'active' : ''} ${title == '' ? 'd-none' : ''}`}>
                                {
                                    (returnRoute !== '')
                                        ? <Link to={returnRoute}>{title}</Link>
                                        : <>{title}</>
                                }
                            </li>
                            <li className={`breadcrumb-item active ${subtitle == '' ? 'd-none' : ''}`}>
                                {subtitle}
                            </li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    {children}
                </section>
            </main>
        </>
    )
}
