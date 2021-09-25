import '../styles/App.scss';
import { useState } from 'react';
import dataClubs from '../data/clubs.json';

function App() {
  // Estados

  // Constante dde guardo mi array con data inicial (dataClubs)
  const [clubs, setClubs] = useState(dataClubs);
  // 7 creamos variables de estado para el contenido de los inputs, poder recogerlos y actualizarlos con su función asingada- react monitoriza esos datos
  const [name, setName] = useState('');
  // 8 estas variables son tipo de dato booleano. no son strings.
  // Los monitorizamos con la prop checked y por defecto no queremos que aparezcan chequeados- false
  const [openOnWeekdays, setOpenOnWeedays] = useState(false);
  const [openOnWeekend, setOpenOnWeekend] = useState(false);
  // 22 creamos var d estado filter. valor por defecto all
  const [filter, setFilter] = useState('all');

  // Eventos
  // 23 función manejadora q recoge value de ese select
  const handleFilter = (ev) => {
    setFilter(ev.target.value);
  };
  // 11 función manejadora del evento onChange que actualiza el valor del input de nombre
  const handleName = (ev) => {
    setName(ev.target.value);
  };
  // 13 función manejadora de input tipo checkbox(checkbox no tiene value, no se introduce texto. por ello monitoreamos el atributo prev creado, checked- dame lo q esté en checked )
  const handleOpenOnWeekdays = (ev) => {
    setOpenOnWeedays(ev.target.checked);
  };

  // 14 función manejadora del 2o checkbox
  const handleOpenOnWeekend = (ev) => {
    setOpenOnWeekend(ev.target.chedked);
  };
  // 17 creo función manejadora ev y prevDef xq es submit y no queremos que se resetee
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // 19 con push meto el nuevo obj en nuestro array orig
    clubs.push(
      // 18 creo estructura nuevo objeto que será creado con variables de estado en su valor
      {
        name: name,
        openOnWeekdays: openOnWeekdays,
        openOnWeekend: openOnWeekend,
      }
    );
    // 20 modificamos la variable de estado dame todo lo que tienes y lo nuevo- con un spread operator
    setClubs([...clubs]);
  };

  // 1- Pinto el array inicial con .maps, que toma dos parámetros: cada elemento del array (club, en este caso será un objeto) y el indice del elemento. .maps devuelve un return.

  const renderClubs = () => {
    return (
      clubs
        // 24 filtramos en momento d pintar. función filter recibe cm parametro funcion tipo arrow c c parametro cd el club y un return. el filter se basa en la var estado filter(q contiene valor del elemento de lista desplegable seleccionado x user). si filter es true, q pinte lo que contiene
        .filter((club) => {
          if (filter === 'openOnWeekdays') {
            // 25 q pinte los q dentro de mi array club tienen openOnWeekdays = true
            return club.openOnWeedays === true;
          } else if (filter === 'openOnWeekend') {
            return club.setOpenOnWeekend === true;
          }
          return true;
        })
        .map((club, index) => {
          return (
            /*4- valor único con index si array no contiene ids */
            <li key={index}>
              <h2>{club.name}</h2>
              {/* 5 Traducimos valores de 1 obj del a variables para poder pintar todos los objetos. En el array original tenemos true/false para estas propiedades del objeto (openOnWeekdays, pero no puedo ponerlo así. En esos casos creamos un operador ternario- */}
              <p>Abierto entre semana: {club.openOnWeekdays ? 'Sí' : 'No'}</p>
              <p>Abierto fines de semana: {club.openOnWeekend ? 'Sí' : 'No'}</p>
            </li>
          );
        })
    );
  };

  /* 3- Este es el return de la función ppal IMP no olvidarlo */

  return (
    <div>
      <header>
        <form action="">
          {/* 21 creamos desplegable para filtrar cursos y según el select tiene evento handleFilter. Creamos tb value, pero ese valor es dif al q ve la usuaria y el evento sobre el select (no sobre form). para monitorizar los select necesitamos crear value q guarda variable de estado filter*/}
          <select value={filter} onChange={handleFilter}>
            <option value="all">Todos</option>
            <option value="openOnWeekDays">Abren entre semana</option>
            <option value="openOnWeekend">Abren fines de semana</option>
          </select>
        </form>
      </header>

      {/* 2- Invoco a la función que va a pintar el array */}

      <ul>{renderClubs()}</ul>
      {/* 6 Creamos el resto de la estructura del html */}
      {/* 16 creamos evento onSubmit para que se cree un nuevo objeto del array cd desee ususario. Tb podríamos añadir en su lugar un ev onClick (no onSubmit para el boton) al botón de input más abajo en su lugar*/}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre del Club </label>

        <input
          type="text"
          name="name"
          id="name"
          // 9 añadimos un value al input para que ese valor siempre esté monitorizado y actualizado a través de variable de estado
          value={name}
          // 10 función evento que modifique el estado
          onChange={handleName}
        />
        <p>
          <label htmlFor="openOnWeekdays">¿Abre entre semana?</label>
          {/* 12 monitoreamos los inputs tipo checkbox.IMP: checkbox nunca cambia su value, por tanto no puedo usar en la función manejadora del evento .value, sino .checked para ello creo la propiedad checked con valor variable de estado q cambia si marcamos o no */}
          <input
            type="checkbox"
            name="openOnWeekdays"
            id="openOnWeekdays"
            checked={openOnWeekdays}
            onChange={handleOpenOnWeekdays}
          />
        </p>
        <label htmlFor="">¿Abre el fin de semana?</label>
        <input
          type="checkbox"
          name="openOnWeekend"
          checked={openOnWeekend}
          onChange={handleOpenOnWeekend}
          id="openOnWeekend"
        />
        <p>
          <input
            type="submit"
            name="btn"
            id="btn"
            value="Añadir un  nuevo club"
          />
        </p>
      </form>
    </div>
  );
}

export default App;
