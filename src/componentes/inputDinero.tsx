import React, { useState } from 'react';

const InputComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Separar automáticamente cada 3 valores con un espacio, considerando mil, 10 mil y 100 mil
    const formattedValue = value.replace(/[^\d.]/g, ''); // Permitir solo dígitos y el punto como decimal

    let separatedValues;
    if (formattedValue.length <= 3) {
      separatedValues = formattedValue;
    } else if (formattedValue.length <= 6) {
      separatedValues = formattedValue.substring(0, 3) + ' ' + formattedValue.substring(3);
    } else if (formattedValue.length <= 9) {
      separatedValues = formattedValue.substring(0, 3) + ' ' + formattedValue.substring(3, 6) + ' ' + formattedValue.substring(6);
    } else {
      // Puedes extender la lógica para números mayores si es necesario
      separatedValues = formattedValue.substring(0, 3) + ' ' + formattedValue.substring(3, 6) + ' ' + formattedValue.substring(6, 9) + ' ' + formattedValue.substring(9);
    }
    setInputValue(separatedValues);
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Meta</label>
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="100 000 000"
        step="0.01" min="0" max="10"
      />
    </div>
  );
};

export default InputComponent;
