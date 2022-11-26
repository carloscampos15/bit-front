import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { DashboardPage } from './../pages/DashboardPage';
import { SectorPage } from './../pages/SectorPage';
import { ClientPage } from './../pages/ClientPage';
import { ContactPage } from './../pages/ContactPage';

export const BitRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/sectors' element={<SectorPage />} />
            <Route path='/clients' element={<ClientPage />} />
            <Route path='/contacts' element={<ContactPage />} />

            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    )
}
