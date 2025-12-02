import logo from './logo.svg';
import './App.css';
import { TodoBox } from './components/TodoBox';
import { useState } from 'react';
import { TodoContext } from './context/TodoContext';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskList([...taskList, { name: task, completed: false }]);
    setTask("");
  }

  return (
    <>
      <TodoContext.Provider value={{ taskList, setTaskList, task, setTask, handleSubmit }}>
        <div className="container">
        <TodoBox />
        </div>
      </TodoContext.Provider>
    </>
  );
}

export default App;
