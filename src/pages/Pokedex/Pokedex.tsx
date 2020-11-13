import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Heading, { HeaderType } from '../../components/Heading/Heading';
import { PokemonType } from '../../constants';

interface IPokemon {
  abilities: string[];
  base_experience: number;
  height: number;
  id: number;
  img: string;
  is_default: boolean;
  name: string;
  name_clean: string;
  order: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: [PokemonType];
  weight: number;
}

interface IData {
  total: number;
  pokemons: IPokemon[];
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=30');
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

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
