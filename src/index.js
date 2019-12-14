import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();

//ReactDOM.render(
    //<BrowserRouter>
        //<Switch>
           // <Route path="/home" component={App} />
           // <Redirect from="/" to="/home" />
       // </Switch>
    //</BrowserRouter>
    //, document.getElementById('root'));
