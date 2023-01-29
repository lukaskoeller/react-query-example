import './App.css'
import { Todos } from './components/Todos'
import { TodoForm } from './components/TodoForm';

const App = () => (
  <div className="App">
    <header>
      <h1>Open Weather</h1>
    </header>
    <main>
      <Todos />
    </main>
    <aside>
      <TodoForm />
    </aside>
  </div>
);

export default App
