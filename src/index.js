import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.jpg';
import './index.css';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="App">
        <header className="App-header">
            <div id="header-header-div">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">DonkeySports&trade;</h1>
            </div>
        </header>
    <Routes />
        <footer id="footer-frosted">
            <div>

            </div>
        </footer>
            </div>, document.getElementById('root'));
registerServiceWorker();
