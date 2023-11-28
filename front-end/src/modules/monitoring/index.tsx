// src/App.jsx
import React, { useState } from 'react';
import CheckboxButton from '../../shared/components/checkboxButton/CheckboxButton';

const Monitoring = () => {
    const [checkboxes, setCheckboxes] = useState([]);
  
    const handleCheckboxChange = (index: any) => {
      setCheckboxes((prevCheckboxes) => {
        const newCheckboxes = [...prevCheckboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        return newCheckboxes;
      });
    };
  
    return (
      <div>
        <h1>Checkboxes em formato de botão</h1>
        {checkboxes.map((isChecked, index) => (
          <CheckboxButton
            key={index}
            label={`Checkbox ${index + 1}`}
            onChange={() => handleCheckboxChange(index)}
          />
        ))}
      </div>
    );
  };
  
  export default Monitoring;