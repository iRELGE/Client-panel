import React from 'react';
import { Link } from 'react-router-dom';


export default function pageNotFound() {
    return (
        <div>
            <h2>Page Not Found 404</h2>
           <Link to='/'>Back To Home</Link>
        </div>
    )
}
