import React from 'react';
import cn from 'classnames';
import classes from './Navigation.module.scss';
import NavigationLinks from '../../../constants';
import Logo from '../../../assets/img/Logo.svg';

interface Props {
  isOpenMenu: boolean;
  onClose: () => void;
}

const Navigation: React.FC<Props> = ({ isOpenMenu, onClose }: Props) => {
  const cls: Array<string> = [cn(classes.navigation), isOpenMenu ? cn(classes.open) : ''];

  return (
    <>
      {isOpenMenu && (
        <div
          className={cn(classes.wrapper)}
          onClick={onClose}
          onKeyPress={onClose}
          role="button"
          aria-label="close"
          tabIndex={0}
        />
      )}
      <nav className={cls.join(' ')}>
        <a className={cn(classes.logo)} href="/">
          <img src={Logo} alt="" />
        </a>
        <ul className={cn(classes.list)}>
          {NavigationLinks.map((link) => {
            return (
              <li key={link.title}>
                <a className={cn(classes.link)} href={link.path}>
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
