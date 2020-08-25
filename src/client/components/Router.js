import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Blog from "./Blog";
import Authentication from './Authentication';
import Registration from "./Registration/Registration";
import LogOut from './LogOut';

import Menu from "./Menu";
import Whoops404 from './Whoops404';

const Router = () =>
        <Switch>
                <Route exact path='/' component={Blog} />
                <Route path='/login' component={Authentication} />
                <Route path='/regist' component={Registration} />
                <Route path='/logout' component={LogOut}/>
                <Route component={Whoops404} />
        </Switch>

export default Router;