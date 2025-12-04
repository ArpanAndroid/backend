import React from 'react';
import Home from '../pages/Home';

/**
 * Central Route Configuration
 * Define all application routes here.
 */
export const routes = [
    {
        path: '/',
        element: <Home />,
        exact: true
    },
    // Add more routes here, e.g.:
    // { path: '/about', element: <About /> }
];
