import React from 'react';
import './index.css';

function Inputs({ sets, value, label }) {
  return (
    <div className="input">
      <h5>
        {label} : {value}
      </h5>
      <input
        onChange={(e) => sets(Number(e.target.value))}
        type="range"
        value={value}
        min={1}
        max={100}
      />
    </div>
  );
}

export default Inputs;
