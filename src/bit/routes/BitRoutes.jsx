import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { DashboardPage } from './../pages/DashboardPage';
import { SectorsPage } from './../pages/SectorsPage';
import { ClientsPage } from './../pages/ClientsPage';
import { ContactsPage } from './../pages/ContactsPage';
import { SectorPage } from './../pages/SectorPage';
import { ClientPage } from './../pages/ClientPage';
import { ContactPage } from './../pages/ContactPage';

export const BitRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='/sectors' element={<SectorsPage />} />
            <Route path='/clients' element={<ClientsPage />} />
            <Route path='/contacts' element={<ContactsPage />} />

            <Route path='/sectors/:id' element={<SectorPage />} />
            <Route path='/clients/:id' element={<ClientPage />} />
            <Route path='/contacts/:id' element={<ContactPage />} />

            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    )
}
