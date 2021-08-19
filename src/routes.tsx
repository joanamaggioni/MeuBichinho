import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MapPage } from './pages/MapPage';
import { LoginPage } from './pages/LoginPage';
import { CreateNGO } from './pages/CreateNGO';
import { CreateAnimal } from './pages/CreateAnimal';
import { NGO } from './pages/ViewPages/NGOView';
import { Bichinho } from './pages/ViewPages/AnimalView';

export function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/map" exact component={MapPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/create/NGO" exact component={CreateNGO}/>
                <Route path="/create/bichinho" exact component={CreateAnimal}/>
                <Route path="/ong/:id" exact component={NGO}/>
                <Route path="/bichinho/:id" exact component={Bichinho}/>
            </Switch>
        </BrowserRouter>
    );
}