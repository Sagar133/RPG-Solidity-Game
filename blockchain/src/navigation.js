import React, { useState } from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';

import Selection from './components/Selection';
import Upload from './components/Upload';
import Login from './components/Login';
import HeroBooth from './components/HeroBooth';
import StoryBooth from './components/StoryBooth';
import App from './components/App';
import Landing from './components/Landing'
import { UserContext } from './utils/UserContext'



export default function Routes () {
    const [user, setUser] = useState(undefined)
        return (
            <BrowserRouter history={history}>
                <UserContext.Provider value={{user, setUser}}>

                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/Selection" exact component={Selection} />

                    <Route path="/Upload" exact component={Upload} />
                    <Route path="/HeroUpload" exact component={Upload} />
                    <Route path="/StoryUpload" exact component={Upload} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/HeroBooth" exact component={HeroBooth} />
                    <Route path="/StoryBooth" exact component={StoryBooth} />
                    <Route path="/App" exact component={App} />

                </Switch>
        </UserContext.Provider>
            </BrowserRouter>
        )
    
}
