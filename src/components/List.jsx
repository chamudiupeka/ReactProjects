import React from 'react';
import pi, { doublePi, tripplePi } from '../math.js';
function List() {
  return (
    <div className='list'>
      <h1>List</h1>
      <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{tripplePi()}</li>
      </ul>
    </div>
  );
}
export default List;
