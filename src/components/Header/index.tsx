import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number
  value: string
  link: string
}

const MENU: IMenu[] = [
  { id: 1, value: 'Home', link: '/' },
  { id: 2, value: 'Pokedex', link: '/pokedex' },
  { id: 3, value: 'Legendaries', link: '/' },
  { id: 4, value: 'Documentation', link: '/' },
]

const Header: React.FC = () => (
    <header className={s.root}>
      <div className={s.wrapper}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({value, link, id}) => (
            <NavLink key={id} className={s.menuLink} to={link}>
              {value}
            </NavLink>
          ))}
        </div>
      </div>
    </header>)

export default Header;
