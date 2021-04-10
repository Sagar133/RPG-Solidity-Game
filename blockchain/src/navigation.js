import React from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';

import Selection from './components/Selection';
import Upload from './components/Upload';
import Login from './components/Login';
import Booth from './components/Booth';
import App from './components/App'

export default function Routes () {
        return (
            <BrowserRouter history={history} forceRefresh={true}>
                <Switch>
                    <Route path="/" exact component={Selection} />
                    <Route path="/Upload" exact component={Upload} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Booth" exact component={Booth} />
                    <Route path="/App" eaxt component={App} />
                </Switch>
            </BrowserRouter>
        )
    
}
