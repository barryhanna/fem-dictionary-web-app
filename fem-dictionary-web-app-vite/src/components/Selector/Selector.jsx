import React from 'react';

const Selector = () => {
  return (
    <select
      className="typeface-selector"
      name="typeface"
      id="typeface"
    >
      <option value="sans">Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="mono">Monospace</option>
    </select>
  );
};

export default Selector;
