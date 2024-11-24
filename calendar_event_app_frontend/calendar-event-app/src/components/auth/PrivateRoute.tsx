import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Loading } from '../common/Loading';

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <Loading />;
    }

    return user ? <>{children}</> : <Navigate to="/login" replace />;
};
