import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

const App = () => {
  // Creamos series para guardar las series respondidas por el API, eso será un array vacío
  const [series, setSeries] = useState([]);
  // Creamos searchSeries para gestionar el input de búsqueda, por eso un string vacío
  const [searchSeries, setSearchSeries] = useState('');

  //useEffect

  useEffect(() => {
    // Llamamos API pasando por parámetros el searchSeries
    callToApi(searchSeries).then((response) => {
      // Cuando la API responde, guardamos series en el estado
      setSeries(response);
    });
  }, [searchSeries]);

  //Eventos

  const handleSeries = (ev) => {
    // Cuando la usuaria cambia el input guardamos el valor en el estado
    setSearchSeries(ev.target.value);
  };

  //Renderizado

  const renderSeries = () => {
    // Pintamos el listado de personajes respondido por el API
    return series.map((serie, index) => {
      return <li key={index}> Nombre {serie.name}</li>;
    });
  };

  return (
    <div>
      <h1>Buscador de Series</h1>
      <form>
        <label htmlFor="series">Busca el nombre de tu serie favorita</label>
        <input
          type="text"
          name="series"
          id="series"
          value={searchSeries}
          onChange={handleSeries}
        />
      </form>
      <h2>Tu serie favorita es {searchSeries}</h2>
      <ul>{renderSeries()}</ul>
    </div>
  );
};

export default App;
