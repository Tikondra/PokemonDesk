import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex/Pokedex';
import Documentation from './pages/Documentation/Documentation';
import Legendaries from './pages/Legendaries/Legendaries';

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  { title: 'Home', link: '/', component: () => <HomePage /> },
  { title: 'Pokedex', link: '/pokedex', component: () => <Pokedex /> },
  { title: 'Legendaries', link: '/legendaries', component: () => <Documentation /> },
  { title: 'Documentation', link: '/documentation', component: () => <Legendaries /> },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, it: IGeneralMenu) => {
  acc[it.link] = it.component;
  return acc;
}, {});

export default routes;
