import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className='row text-center mb-5'>
            <h1 className='mt-5'>404 NOT FOUND</h1>
            <p>We couldn’t find the page you were looking for. Visit <Link to="/">Zerodha’s home page</Link>

            </p>
        </div>
    );
}

export default NotFound;