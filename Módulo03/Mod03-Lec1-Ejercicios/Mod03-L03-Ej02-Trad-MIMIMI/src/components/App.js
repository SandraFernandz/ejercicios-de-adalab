import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleChange = (ev) => {
    const inputValue = ev.target.value;
    setText(inputValue);
  };

  return (
    <div>
      <form>
        <label htmlFor="text">
          Texto:
          <textarea id="text" value={text} onChange={handleChange} />
        </label>
      </form>
      <p>{text}</p>
    </div>
  );
}

export default App;
