// Fichero src/components/App.js
import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('shown');
  const handleHamburguerMenu = () => {
    if (theme === 'hidden') {
      setTheme('shown');
    }
    console.log(theme);
  };

  const handleNoHamburguerMenu = () => {
    if (theme === 'shown') {
      setTheme('hidden');
    }
  };
  return (
    <div>
      <nav>
        <button className="form__buton" onClick={handleHamburguerMenu}>
          <i className="icon fas fa-bars"></i>
        </button>
      </nav>
      <div className={theme}>
        {' '}
        <button>
          <i className="fas fa-arrow-left" onClick={handleNoHamburguerMenu}></i>
        </button>
        <ul>
          <li>
            <a>Elemento 1</a>
          </li>
          <li>
            <a>Elemento 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default App;
