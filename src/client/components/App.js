import React from 'react';
import {render} from 'react-dom';
import Router from "./Router";
import Authentication from './Authentication';
import { HashRouter } from 'react-router-dom'

render(
    <HashRouter>
        <Router />
    </HashRouter>,
document.getElementById('react-container'));