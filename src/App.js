import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import home from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;