import React from 'react';
import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Heading, { HeaderType } from '../../components/Heading/Heading';
import useData from '../../hook/getData';

const Pokedex = () => {
  const { data, isLoading, isError } = useData('getPokemons');

  if (isLoading || isError) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Heading type={HeaderType.h2}>{isLoading ? 'Loading...' : 'Error!'}</Heading>
      </div>
    );
  }

  return (
    <Layout>
      <h2 className={s.title}>
        {data.total} <b>Pokemons</b> for you to choose your favorite
      </h2>
      <div className={s.list}>
        {data.pokemons.map((it) => (
          <PokemonCard key={it.id} pokemonData={it} />
        ))}
      </div>
    </Layout>
  );
};

export default Pokedex;
