import '../styles/App.scss';

// Fichero src/components/App.js
const App = () => {
  return (
    <div>
      <form>
        <label forhtml="name">Escribe un nombre:</label>
        <input type="name" name="name" id="name" placeholder="María García" />
      </form>
    </div>
  );
};

export default App;
