import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MapPage } from './pages/MapPage';
import { LoginPage } from './pages/LoginPage';
import { CreateNGO } from './pages/CreateNGO';
import { CreateAnimal } from './pages/CreateAnimal';

export function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/map" exact component={MapPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/createNGO" exact component={CreateNGO}/>
                <Route path="/createAnimal" exact component={CreateAnimal}/>
            </Switch>
        </BrowserRouter>
    );
}