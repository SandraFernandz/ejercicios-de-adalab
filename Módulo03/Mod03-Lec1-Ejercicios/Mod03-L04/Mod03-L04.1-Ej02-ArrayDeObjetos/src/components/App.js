import '../styles/App.scss';

const App = () => {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];
  //tarea representa cada elemento del array que tiene las propiedades task y completed, y podría ser pepino
  const renderTasks = () => {
    return tasks.map((tarea, index) => {
      //faltaría tachar la lista con método de string
      // if (tarea.completed === true) {
      //   //función original String.strike();
      //   tasks.task.strike();
      // }

      console.log(tarea);
      return <li key={index}>Tengo que {tarea.task}</li>;
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
