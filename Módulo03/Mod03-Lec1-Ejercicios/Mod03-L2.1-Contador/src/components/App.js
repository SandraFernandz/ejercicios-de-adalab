import '../styles/App.scss';

import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const handleCounter = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>Contador:{number} </h1>
      <p>Sube el número del contador haciendo 'click' en el botón</p>
      <button onClick={handleCounter}>Clickeame</button>
    </div>
  );
}

export default App;
