import React from 'react';

// Styling
import './index.css';

function Nav(props) {
    const LoggedIn = <LoggedIn_Nav />;
    const LoggedOut = <LoggedOut_Nav />;

    return (
        <>
            {props.logged_in ? LoggedIn : LoggedOut}
        </>
    )
}

function LoggedIn_Nav(props) {
    return (
        <ul>
            <li onClick={props.handle_logout}>
                Logout
            </li>
        </ul>
    );
}

function LoggedOut_Nav(props) {
    return (
        <ul>
            <li onClick={(
                props.display_form('login')
            )}>
                Login
            </li>
            <li onClick={(
                props.display_form('Register')
            )}>
                Register
            </li>
        </ul>
    )
}

export default Nav;