import React from 'react';

export default function Footer() {
  const name = 'Chamudi';
  const date = new Date();
  const year = date.getFullYear();
  console.log(year);

  return (
    <footer>
      <p>Created by {name}</p>
      <p>Copyright {year}</p>
    </footer>
  );
}
