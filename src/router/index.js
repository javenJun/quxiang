import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import loadable from '@loadable/component';
export default function Router(){
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path = "/signup" exact component = {loadable(() => import('../views/SignupPage'))} ></Route>
                    <Route path = "/signin" exact component = {loadable(() => import('../views/SigninPage'))} ></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}