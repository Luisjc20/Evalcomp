import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen.js';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth );

    useEffect(() => {
        
        dispatch( startChecking() )

    }, [dispatch]);

    if ( checking ) {

        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Routes>

                    <Route 
                        path="/Login" 
                        element={ 
                            <PublicRoute isAuthenticated={ !!uid}>
                                <LoginScreen />
                            </PublicRoute>
                         } 
                    />

                    <Route 
                        path="/*" 
                        element={ 
                            <PrivateRoute isAuthenticated={ !!uid}>
                                <DashboardRoutes />
                            </PrivateRoute>
                         }
                    />

                </Routes>
            </div>
        </Router>
    )
}
