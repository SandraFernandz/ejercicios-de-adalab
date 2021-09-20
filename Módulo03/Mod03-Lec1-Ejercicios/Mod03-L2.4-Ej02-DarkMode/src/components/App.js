import '../styles/main.scss';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('dark-mode');
  const [darkMode, setDarkMode] = useState(true);
  //const color = 'dark-mode'
  const handleButton = () => {
    if (!color) {
      setColor('dark-mode');
    } else {
      setColor('');
    }

    setDarkMode(!darkMode);
  };
  return (
    <div>
      <button onClick={handleButton}>Des/activar el dark mode</button>
      <p> Tienes activado el dark mode</p>
      <p className={color}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et veniam cum
        eaque iste doloremque natus maiores qui odit at fugit praesentium earum
        culpa delectus, adipisci, illum maxime quia veritatis porro?
      </p>
      <p className={darkMode === true ? 'dark-mode' : ''}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et veniam cum
        eaque iste doloremque natus maiores qui odit at fugit praesentium earum
        culpa delectus, adipisci, illum maxime quia veritatis porro?
      </p>
    </div>
  );
}
export default App;

/*

darkMode === true ? 'dark-mode' : ''

if (darkMode === true) {
  className = 'dark-mode'
} else {
  className = ''
}

*/
