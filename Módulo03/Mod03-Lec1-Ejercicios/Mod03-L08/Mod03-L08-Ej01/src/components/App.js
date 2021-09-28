// Fichero src/components/App.js

// Fichero src/components/App.js

import { Link, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Route exact path="/overview">
        <h2>
          Este título solo aparece cuando la usuaria entra en la página de
          overview
        </h2>
      </Route>
      <Route exact path="/repositories">
        <h2>
          Este título solo aparece cuando la usuaria entra en la página de
          Repositories
        </h2>
      </Route>
      <Route exact path="/people">
        <h2>
          Este título solo aparece cuando la usuaria entra en la página de
          People
        </h2>
      </Route>

      <nav>
        <ul>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/repositories">Repositories</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
