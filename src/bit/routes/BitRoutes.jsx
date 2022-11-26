import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { DashboardPage } from './../pages/DashboardPage';

export const BitRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<DashboardPage />} />
            {/* <Route path='/applications' element={<ApplicationsPage />} />
            <Route path='/applications/:applicant_id' element={<ApplicationPage />} />
            <Route path='/users' element={<UsersPage />} /> */}

            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    )
}
