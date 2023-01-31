import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ ele: element, ...rest }) => {
    const navigation = useNavigate()
    const { loading, user, isAuthenticated } = useSelector((state) => state.user)
    return (
        <div>
            {/* <React.Fragment>
                {!loading && (
                    <Routes>
                        <Route
                            {...rest}
                            render={(props) => {
                                if (!isAuthenticated) {
                                    return navigation("/login");
                                }
                                return <element{...props} />
                            }}
                        />
                    </Routes>
                )}
            </React.Fragment> */}
        </div>
    );
};

export default ProtectedRoute
