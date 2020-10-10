import React from 'react';
import ReactDOM from 'react-dom';

// Components
import LangingPage from './landing-page';
import NavBar from './nav';


// Styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LangingPage>
      <NavBar />
    </LangingPage>
  </React.StrictMode>,
  document.getElementById('root')
);