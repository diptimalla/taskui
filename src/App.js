import './App.css';

import Layout from './components/Layout';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import TaskList from './components/TaskList';
import TaskUpdate from './components/TaskUpdate';
import {Routes , Route} from 'react-router-dom';

function App() {
  
  return (
      <Routes>
        <Route path='/' element ={<Layout/>}>
        <Route path='taskform' element ={<TaskForm/>}/>
        <Route path='taskitem/:id' element ={<TaskItem/>}/>
        <Route path='tasklist' element ={<TaskList/>}/>
        <Route path='taskupdate/:id' element ={<TaskUpdate/>}/>
        
       
        </Route>
      </Routes>
  );
}

export default App;
