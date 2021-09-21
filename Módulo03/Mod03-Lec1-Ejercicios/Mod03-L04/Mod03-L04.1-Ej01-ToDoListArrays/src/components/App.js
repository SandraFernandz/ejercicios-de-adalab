import '../styles/App.scss';

const App = () => {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return <li key={index}>Tengo que {task}</li>;
    });
  };

  return (
    <div>
      <h1>Lista de To Do´s</h1>
      <ul>{renderTasks()}</ul>
    </div>
  );
};

export default App;
