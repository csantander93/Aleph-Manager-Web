import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import './CounterGrid.css';

const CounterGrid = () => {
  const counters = [
    { 
      value: 56, 
      label: "Clientes", 
      description: "Empresas que confían en nuestros servicios" 
    },
    { 
      value: 6, 
      label: "Países", 
      description: "Mercados internacionales donde operamos" 
    },
    { 
      value: 10, 
      label: "Años", 
      description: "Innovando soluciones a medida" 
    },
  ];

  return (
    <div className="counter-grid">
      {counters.map((counter, index) => (
        <AnimatedCounter 
          key={index}
          targetValue={counter.value}
          label={counter.label}
          description={counter.description}
        />
      ))}
    </div>
  );
};

export default CounterGrid;