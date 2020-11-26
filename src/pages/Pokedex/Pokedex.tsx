import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Heading, { HeaderType } from '../../components/Heading/Heading';
import useData from '../../hook/getData';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setQuery((s) => ({
      ...s,
      name: evt.target.value,
    }));
  };

  if (isError) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Heading type={HeaderType.h2}>Error!</Heading>
      </div>
    );
  }

  return (
    <Layout>
      <h2 className={s.title}>
        {!isLoading && data.total} <b>Pokemons</b> for you to choose your favorite
      </h2>
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <div className={s.list}>
        {!isLoading && data.pokemons.map((it) => <PokemonCard key={it.id} pokemonData={it} />)}
      </div>
    </Layout>
  );
};

export default Pokedex;
