import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleChange = (ev) => {
    const inputValue = ev.target.value;
    setText(inputValue);
  };
  const convertToIs = () => {
    //nunca podemos pasar una variable de estado como paramtetro
    //tampoco pocemos aplicarle una modificación. si queremos hacerlo tendremos que guardarla en una variable
    const inputValue = text;
    return inputValue.replace(/[aeou]/gi, 'i');
  };

  return (
    <div>
      <form>
        <label htmlFor="text">
          Texto:
          <textarea id="text" onChange={handleChange} />
        </label>
      </form>
      <p>{convertToIs()}</p>
    </div>
  );
}

export default App;
