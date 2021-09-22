import '../styles/App.scss';
import { useEffect, useState } from 'react';

const App = () => {
  const [paranormal, setParanormal] = useState({});

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=paranormal')
      .then((response) => response.json())
      .then((responseData) => {
        // cd el api responde guardo los datos en el estado para que se renderice el componente
        setParanormal(responseData);
      });
  });
  return <div>{paranormal}</div>;
};

export default App;
