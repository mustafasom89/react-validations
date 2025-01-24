import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const DropDown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownColors, setDropdownColors]  = useState(['']); 

  const handleDropdownChange = (event, index) => {
    const selectedValue = event.target.value;
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = selectedValue;
    setSelectedOptions(updatedSelectedOptions);

    if (selectedValue !== '') {
      const updatedDropdownColors = [...dropdownColors];
      updatedDropdownColors[index] = selectedValue;
      setDropdownColors(updatedDropdownColors);
    }
  };

  const renderDropdowns = () => {
      return dropdownColors.map((color, index) => (
      <select className='btn btn-outline-secondary'
        key={index}
        value={selectedOptions[index] || ''}
        onChange={(event) => handleDropdownChange(event, index)}
        style={{ backgroundColor: color, color:'black' }}
      >
        <option value="white">-- Select --</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
    ));
  };

  return (
    <div>
      <label>Select options:</label>
      {renderDropdowns()}
    </div>
  );
};

export default DropDown;