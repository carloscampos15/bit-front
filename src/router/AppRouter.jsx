import { Route, Routes, Navigate } from "react-router-dom"
import { AuthRoutes } from './../auth/routes/AuthRoutes';
import { BitRoutes } from './../bit/routes/BitRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkAuthToken } from "../store/auth/thunks";
import { LoadingState } from './../ui/components/LoadingState';

export const AppRouter = () => {
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuthToken());
    }, [])

    if (status === 'checking') return <LoadingState />

    return (
        <Routes>
            {
                (status === 'not-authenticated')
                    // Auth
                    ? <Route path="/auth/*" element={<AuthRoutes />} />
                    // Bit
                    : <Route path="/*" element={<BitRoutes />} />
            }
            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}