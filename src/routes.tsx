import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex/Pokedex';
import Documentation from './pages/Documentation/Documentation';
import Legendaries from './pages/Legendaries/Legendaries';
import Pokemon, { PokemonProps } from './pages/Pokemon/Pokemon';

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  { title: 'Home', link: LinkEnum.HOME, component: () => <HomePage /> },
  { title: 'Pokedex', link: LinkEnum.POKEDEX, component: () => <Pokedex /> },
  { title: 'Legendaries', link: LinkEnum.LEGENDARIES, component: () => <Documentation /> },
  { title: 'Documentation', link: LinkEnum.DOCUMENTATION, component: () => <Legendaries /> },
];

const SECONDS_ROUTES: IGeneralMenu[] = [
  { title: 'Pokemon', link: LinkEnum.POKEMON, component: ({ id }: PokemonProps) => <Pokemon id={id} /> },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECONDS_ROUTES].reduce((acc: IAccMenu, it: IGeneralMenu) => {
  acc[it.link] = it.component;
  return acc;
}, {});

export default routes;
