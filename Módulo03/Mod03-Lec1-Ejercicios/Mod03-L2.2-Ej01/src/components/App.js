import '../styles/App.scss';

function App() {
  const handleWrittenText = (ev) => {
    console.log('La tecla pulsada es:', ev.key);
  };

  return (
    <div>
      <form className="form" action="">
        <label htmlFor="" value="">
          Escribe aquí, por favor
          <input
            className="form_input"
            type="text"
            id="name"
            onKeyUp={handleWrittenText}
          />
        </label>
      </form>
    </div>
  );
}

export default App;
