import React, { useState } from 'react';
import cn from 'classnames';
import classes from './Header.module.scss';
import Logo from '../../assets/img/Logo.svg';
import Navigation from './navigation/Navigation';
import BurgerBtn from './burger/BurgerBtn';

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const menuToggleHandler = () => setIsOpenMenu((prevState) => !prevState);

  return (
    <header className={cn(classes.header)}>
      <div className={cn(classes.wrapper)}>
        <a href="/">
          <img className={cn(classes.logo)} src={Logo} width={58} height={22} alt="PokemonDesk" />
        </a>
        <BurgerBtn onOpen={menuToggleHandler} />
        <Navigation isOpenMenu={isOpenMenu} onClose={menuToggleHandler} />
      </div>
    </header>
  );
};

export default Header;
