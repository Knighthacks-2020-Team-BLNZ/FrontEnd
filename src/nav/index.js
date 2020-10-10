import React from 'react';

// Styling
import  './index.css';

function Nav(props) {
    const LoggedIn = <LoggedIn />;
    const Loggedout = <LoggedOut />;

    return (
        <>
        {props.logged_in ? LoggedIn : LoggedOut}
        </>
    )
}

function LoggedIn(props) {
    <ul>
        <li onClick={props.handle_logout}>
            Logout
        </li>
    </ul>
}

function LoggedOut(props) {
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