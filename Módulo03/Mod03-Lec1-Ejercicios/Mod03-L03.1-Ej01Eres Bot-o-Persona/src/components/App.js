import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [ingredients, setIngredients] = useState('');

  const handleIngredients = (ev) => {
    const inputValue = ev.target.id;
    setIngredients(inputValue);
    console.log(ingredients);

    if (inputValue === ('patatas' && 'huevos' && 'cebolla')) {
      console.log('Eres una persona cebollista');
    } else {
      console.log('Eres un robot sin paladar');
    }
  };

  return (
    <div>
      <h1>Selecciona los ingredientes de una tortilla de patatas</h1>
      <form action="" onChange={handleIngredients}>
        <label htmlFor="macarrones">Macarrones</label>
        <input type="checkbox" name="macarrones" id="macarrones" />
        <label htmlFor="patatas">Patatas</label>
        <input type="checkbox" name="patatas" id="patatas" />
        <label htmlFor="nueces">Nueces</label>
        <input type="checkbox" name="nueces" id="nueces" />
        <label htmlFor="huevos">Huevos</label>
        <input type="checkbox" name="huevos" id="huevos" />
        <label htmlFor="cebolla">Cebolla</label>
        <input type="checkbox" name="cebolla" id="cebolla" />
      </form>
    </div>
  );
}

export default App;
