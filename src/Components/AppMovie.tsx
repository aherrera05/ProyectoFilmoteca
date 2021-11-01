
import './App.css';

import React from 'react';
import { Home } from './HomeMovie';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Rated } from './rateds';
import { NotFound } from './404';
import { Nav } from './Naveg';
import { Popular } from './Popular';
import { RMovie } from './ratedMovie';



const App: React.FC = () => {
  
  return <> 
  <Nav/>
  <BrowserRouter>
  <Switch>
    <Route path='/' exact >
      <Home/>
    </Route>
    <Route path='/rateds' exact >
      <Rated/>
    </Route>
    <Route path='/Popular' exact >
      <Popular/>
    </Route>
    <Route path='/ratedMovie' exact >
      <RMovie/>
    </Route>
    
    <Route path='/404' exact >
      <NotFound/>
    </Route>
   
    
  </Switch>
  </BrowserRouter>
</>
}

export default App;