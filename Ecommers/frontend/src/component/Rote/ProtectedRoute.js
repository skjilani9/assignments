import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import LoginSigup from '../User/LoginSigup'

const ProtectedRoute = () => {
    const { isAuthenticated,loading } = useSelector((state) => state.user)
    return (
        <Fragment>{!loading && (isAuthenticated ? <Outlet /> : <LoginSigup />) }</Fragment>
    )
};

export default ProtectedRoute
