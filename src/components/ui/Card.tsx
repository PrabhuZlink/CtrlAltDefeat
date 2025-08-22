import React from 'react';
import { CardProps } from '../../types';
import './Card.scss';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
  ...props
}) => {
  const cardClasses = [
    'card',
    `card-${padding}`,
    `card-${shadow}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
