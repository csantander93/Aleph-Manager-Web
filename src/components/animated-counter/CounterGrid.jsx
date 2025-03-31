import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import './CounterGrid.css';

const CounterGrid = () => {
  const clientsByCountry = [
    { value: 52, label: "Argentina" },
    { value: 1, label: "UALÁ - Colombia" },
    { value: 1, label: "CoopeAnde - Costa Rica" },
    { value: 1, label: "Ficohsa - Honduras" },
    { value: 1, label: "Ficohsa - Nicaragua" },
    { value: 1, label: "Mercantil - Panamá" }
  ];

  return (
    <div className="counter-grid">
      {clientsByCountry.map((country, index) => (
        <AnimatedCounter 
          key={index}
          targetValue={country.value}
          label={country.label}
          // Eliminamos la descripción ya que no la necesitamos
          delay={index * 0.15} // Añadimos delay escalonado para animaciones
        />
      ))}
    </div>
  );
};

export default CounterGrid;