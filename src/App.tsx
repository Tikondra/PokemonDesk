import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from "./pages/Home";
import Pokedex from "./pages/Pokedex/Pokedex";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Redirect to="/" />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/pokedex">
        <Pokedex />
      </Route>
    </BrowserRouter>
    )
};

export default App;
