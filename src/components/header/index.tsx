import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

const Header: React.FC = () => {
  const path = usePath();

  return (
    <header className={s.root}>
      <div className={s.wrapper}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              key={title}
              className={cn(s.menuLink, {
                [s.activeLink]: link === path,
              })}
              href={link}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
