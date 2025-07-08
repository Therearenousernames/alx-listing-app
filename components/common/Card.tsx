import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="border rounded-lg p-4 shadow">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Card;
