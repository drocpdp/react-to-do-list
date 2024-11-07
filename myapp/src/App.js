import {Routes, Route } from 'react-router-dom';

import MainPane from './components/main-pane/main-pane.component';
import TasksPane from './components/tasks-pane/tasks-pane.component';
import About from './routes/about/about.component';

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<MainPane />} >
        <Route index element={<TasksPane />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
