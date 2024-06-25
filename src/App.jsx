import Info from './Components/Info'
import Todo from './Components/TodoComponents/Todo'
import './App.css';

const App = () => {
  return (
    <div>
      <div className="app-container">
        <Todo />
        <Info />
      </div>
    </div>
  );
}

export default App;
