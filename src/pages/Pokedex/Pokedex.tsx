import React from 'react';
import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import { pokemons } from '../../constants';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const Pokedex = () => {
  return (
    <Layout>
      <h2 className={s.title}>
        800 <b>Pokemons</b> for you to choose your favorite
      </h2>
      <div className={s.list}>
        {pokemons.map((it) => (
          <PokemonCard key={it.id} pokemonData={it} />
        ))}
      </div>
    </Layout>
  );
};

export default Pokedex;
