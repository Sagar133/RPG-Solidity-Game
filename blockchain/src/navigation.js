import React from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';

import Selection from './components/App';
import Upload from './components/Upload';
import Login from './components/Login';
import Booth from './components/Booth';


export default function Routes () {
        return (
            <BrowserRouter history={history} forceRefresh={true}>
                <Switch>
                    <Route path="/" exact component={Selection} />
                    <Route path="/Upload" exact component={Upload} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Booth" exact component={Booth} />
                </Switch>
            </BrowserRouter>
        )
    
}
