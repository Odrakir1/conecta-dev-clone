import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/Home';
import authService from '../services/authService';

const GuestRoutes = ({element:Component,...rest}) =>{
    const authenticated = authService.isAuthenticated();

    return(
        <Route {...rest} element={(
            authenticated
            ?
            <Home/>
            :
            Component
        )} />
        
    );
}


export default GuestRoutes;