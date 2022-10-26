import React from 'react';
import { Route } from 'react-router-dom';

const customRoute = ({ match, path, exact, component }) => {
    const p = () => {

        return `/${path}`;
    };

    return <Route exact={exact} path={p()} element={component}/>;
};

export default customRoute;
