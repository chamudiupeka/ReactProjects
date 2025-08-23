import React from 'react';
import { Add, Subtract, Multiply } from '../calculator';
function Calculator() {
  return (
    <div>
      <ul>
        <li>{Add(1, 3)}</li>
        <li>{Subtract(4, 5)}</li>
        <li>{Multiply(4, 6)}</li>
      </ul>
    </div>
  );
}
export default Calculator;
