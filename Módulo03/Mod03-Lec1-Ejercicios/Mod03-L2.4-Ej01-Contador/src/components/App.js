import '../styles/App.scss';

// Fichero src/components/App.js
// Importamos useState desde React porque lo vamos a necesitar más abajo
import { useState } from 'react';

// Creamos la función o componente App. Esta vez lo creamos con una función arrow.
const App = () => {
  // Creamos la constante de estado numberA y la función para modificarla setNumberA.
  // El valor inicial que va a tener numberA es 0.
  const [numberA, setNumberA] = useState(0);

  // Creamos una función manejadora que se ejecutará cuando la usuaria haga click en el botón
  const handleIncreaseNumberA = (ev) => {
    // Cogemos el valor del input del primer número.
    const clickedValue = 1;
    // Ejecutamos la función setNumberA para actualizar el valor del estado numberA.
    // Cuando ejecutamos la función setNumberA, React guarda el valor del input en la constante numberA y re-renderiza la página.
    // Esta función no la hemos creado nosotras, nos la ha creado React al utilizar el useState.
    setNumberA(clickedValue);
  };

  // Creamos la constante total con la suma de los dos números.
  // Esta línea de código es JS normal y corriente, no tiene nada que ver con React.

  const total = parseInt(numberA) + 1;
  console.log(total);

  // Retornamos todo el código HTML que queremos que React pinte en la página.
  return (
    <div>
      <h1>El Contador:</h1>
      <form>
        <label>
          Haz click para incrementar el número
          {/* En esta línea indicamos que cuando cambie el input se ejecute la función manejadora handleIncreaseNumberA */}
          <input
            type="button"
            value="Púlsame"
            name="name"
            onClick={handleIncreaseNumberA}
          />
        </label>
      </form>
      <p>Número de veces que has hecho click: `+{total}`</p>
    </div>
  );
};

export default App;
