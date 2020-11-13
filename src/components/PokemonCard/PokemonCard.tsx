import React from 'react';
import cn from 'classnames';
import s from './PokemonCard.module.scss';
import Heading, { HeaderType } from '../Heading/Heading';
import { PokemonType } from '../../constants';

interface IPokemonCardProps {
  pokemonData: {
    name: string;
    stats: {
      attack: number;
      defense: number;
    };
    types: [PokemonType];
    img: string;
    id: number;
  };
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemonData }) => {
  const { name, stats, types, img, id } = pokemonData;

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type={HeaderType.h5}>{name}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={id + type} className={cn(s.label, s[type])}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[types[0]])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
