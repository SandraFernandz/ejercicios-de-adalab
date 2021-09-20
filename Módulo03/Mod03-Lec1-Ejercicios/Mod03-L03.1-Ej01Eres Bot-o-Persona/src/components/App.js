import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [ingredients, setIngredients] = useState(false);

  const handleIngredients = (ev) => {
    setIngredients(ev.target.checked);
    if (ingredients === true) {
      onChange{ingredients}
    }
  };

  console.log(ingredients);
  return (
    <div>
      <h1>Selecciona los ingredientes de una tortilla de patatas</h1>
      <form action="">
        <label htmlFor="macarrones">Macarrones</label>
        <input
          type="checkbox"
          name="macarrones"
          id="macarrones"
          checked={ingredients}
          onChange={handleIngredients}
        />
        <label htmlFor="patatas">Patatas</label>
        <input
          type="checkbox"
          name="patatas"
          id="patatas"
          checked={ingredients}
          onChange={handleIngredients}
        />
        <label htmlFor="nueces">Nueces</label>
        <input
          type="checkbox"
          name="nueces"
          id="nueces"
          checked={ingredients}
          onChange={handleIngredients}
        />
        <label htmlFor="huevos">Huevos</label>
        <input
          type="checkbox"
          name="huevos"
          id="huevos"
          checked={ingredients}
          onChange={handleIngredients}
        />
        <label htmlFor="cebolla">Cebolla</label>
        <input
          type="checkbox"
          name="cebolla"
          id="cebolla"
          checked={ingredients}
          onChange={handleIngredients}
        />
        <p>Los ingredientes necesarios son{ingredients}</p>
      </form>
    </div>
  );
}

export default App;
