import React from 'react';
import s from './Button.module.scss';

export enum ButtonColor {
  green = 'green',
  yellow = 'yellow',
  blue = 'blue'
}

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

interface ButtonProps {
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void
  size: ButtonSize
  color: ButtonColor
  isFullWidth: boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size, color, isFullWidth }) => {
  const classes: Array<string> = [
    s.root,
    s[color],
    s[size],
    isFullWidth ? s.fullWidth : '',
  ]

  return (
    <button className={classes.join(' ')} type='button' onClick={onClick}>
      { children }
    </button>
  );
};

export default Button;