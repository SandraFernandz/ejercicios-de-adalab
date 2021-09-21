import '../styles/App.scss';
import '../styles/_styles.scss';
import logo from '../images/adalab-logo.png';

function App() {
  return (
    <div>
      {/* <h1>Hola Mundo</h1> */}
      <header className="header">
        <div className="image">
          <a href="https://adalab.es/" title="Logo de Adalab">
            <img
              src="./images/adalab-logo-155x61.png"
              title="Logo de Adalab"
              alt="Logo Adalab"
            />
          </a>
        </div>
        <nav>
          <ul className="nav">
            <li>
              <img src={logo} title="Adalab" alt="" />
              <a
                href="https://adalab.es/blog/"
                className="item"
                title="Nuestro Blog"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="https://adalab.es/contacto/"
                className="item"
                title="Contacta con nosotros"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <h1 className="message">Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
