import React, {useState} from 'react';

export default function ConvertKmToMiles() {
  const [km, setKm] = useState(0);

  const handleChange = e => {
    setKm(e.target.value);
  };

  const convert = km => {
    return (km / 1.609).toFixed(2);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Some Km number'
        onChange={handleChange}
        value={km}
      />
      <p>
        {km} Km is {convert(km)} Miles
      </p>
    </div>
  );
}
