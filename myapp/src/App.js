import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component';
import FilterPane from './components/filter-pane/filter-pane.component';
import TasksPane from './components/tasks-pane/tasks-pane.component';

const App = () => {
  
  return (
    <div>
      <Header />
      <FilterPane />
      <TasksPane />

    </div>
  );
}

export default App;
