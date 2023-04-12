import React from 'react';

const TypefaceSelector = () => {
  const [selectedTypeface, setSelectedTypeface] =
    React.useState('sans');

  function updateTypefaceVar(newTypeface) {
    document.body.style.setProperty(
      '--ff-main-ff',
      `var(--ff-${newTypeface})`
    );
  }

  return (
    <select
      className="typeface-selector"
      name="typeface"
      id="typeface"
      aria-label="Typeface"
      value={selectedTypeface}
      onChange={(e) => {
        const newTypeface = e.target.value;
        setSelectedTypeface(newTypeface);
        updateTypefaceVar(newTypeface);
      }}
    >
      <option value="sans">Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="mono">Monospace</option>
    </select>
  );
};

export default TypefaceSelector;
