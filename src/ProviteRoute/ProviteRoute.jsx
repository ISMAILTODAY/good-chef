import React, { useContext } from 'react';
import { contextProvider } from '../ContextProvider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ProviteRoute = ({ children }) => {
    const { user, loading } = useContext(contextProvider);
    const location = useLocation();
    if (loading) {
        return <Spinner className='position-absolute top-50 start-50' animation="border" variant="danger" />
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace>  </Navigate>
};

export default ProviteRoute;