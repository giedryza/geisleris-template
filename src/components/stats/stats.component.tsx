import React from 'react';

const stats = [
  { label: 'Countries', count: 15 },
  { label: 'Offices', count: 36 },
  { label: 'Awards', count: 8 },
  { label: 'Years', count: 54 },
];

const Stats = () => (
  <section className="stats">
    {stats.map(stat => (
      <div className="stats__card" key={stat.label}>
        <div className="stats__counter">{stat.count}</div>
        <div className="stats__label">{stat.label}</div>
      </div>
    ))}
  </section>
);

export default Stats;
