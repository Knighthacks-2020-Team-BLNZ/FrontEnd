import React from 'react';

// Styling
import  './index.css';

function Nav(props) {

    const logged_out_nav = (
        <ul>
            <li onClick={() => {
                props.display_form()
            }}>
                Login
            </li>
        </ul>
    )

}