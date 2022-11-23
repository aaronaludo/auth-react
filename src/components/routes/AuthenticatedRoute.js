import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookies from 'js-cookie';

const AuthenticatedRoute = props => {
    return <Route path={props.path} exact render={() => {
        const token = cookies.get('token');

        if(token !== undefined) {
            return <props.component {...props} />;
        }

        return <Redirect to='/login' />;
    }} />;
}

export default AuthenticatedRoute;
