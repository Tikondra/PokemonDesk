import React from 'react';
import Layout from '../../components/Layout';
import Button, { ButtonColor, ButtonSize } from '../../components/Button';

import s from './Home.module.scss';
import Parallax from './components/Parallax';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

const HomePage: React.FC = () => {
  return (
    <Layout className={s.contentWrap}>
      <div className={s.contentText}>
        <h1 className={s.title}>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </h1>
        <p className={s.text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button
          onClick={() => navigate(LinkEnum.POKEDEX)}
          size={ButtonSize.medium}
          color={ButtonColor.green}
          isFullWidth={false}>
          See pokemons
        </Button>
      </div>
      <div className={s.contentParallax}>
        <Parallax />
      </div>
    </Layout>
  );
};

export default HomePage;
