import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useAuth';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar() {
    const { logOut } = useLogout();
    const { user } = useAuthContext();

    return (
        <nav>
            <h1>My Reading List</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                {!user && <li><Link to='/login'>Login</Link></li>}
                <li><Link to='/signup'>Signup</Link></li>
                {user && <li onClick={() => logOut()}>Logout</li>}
            </ul>
        </nav>
    );
}
