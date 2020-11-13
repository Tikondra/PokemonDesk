import React from 'react';
import s from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={s.footer}>
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
