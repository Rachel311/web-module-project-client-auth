import React from 'react';
import { Route } from 'react-router-dom';
import login from './login';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={
        (props) => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            } else {
                return <login/>
            }
        }
    } />)
}

export default PrivateRoute