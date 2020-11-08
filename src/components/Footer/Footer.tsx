import React from 'react';
import cn from 'classnames';
import classes from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={cn(classes.footer)}>
    <p>
      Make with{' '}
      <span role="img" aria-label="Emojis">
        ❤️
      </span>
    </p>
    <p>Ours Team</p>
  </footer>
);

export default Footer;
