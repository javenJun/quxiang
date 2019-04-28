import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import loadable from '@loadable/component';
export default function Router(){
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path = "/signup" exact component= {} ></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}