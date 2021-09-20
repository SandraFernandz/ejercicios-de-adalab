import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const handleChange = () => {};
  return (
    <div>
      return (
      <form>
        <label>
          Essay:
          <textarea value="" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
