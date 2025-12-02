import React, { useContext } from 'react';
import TaskList from './TaskList';
import { TodoContext } from '../context/TodoContext';

export const TodoBox = () => {
  const { task, setTask, handleSubmit } = useContext(TodoContext);
  return (
    <>
      <div className="card mt-5 text-center">
        <h1 className="card-header">To Do List</h1>
        <div className="card-body">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-5 d-flex justify-content-center align-items-center gap-3">
                <label htmlFor="" className="form-label">Task</label>
                <input type="text" className="form-control w-50" name="task-name" id="task" placeholder="Enter the Task" value={task} onChange={(e) => {setTask(e.target.value)}} />
                <button type="submit" className="btn btn-primary">Add Task</button>
              </div>
            </form>
          </div>
        </div>
        <div className="card-footer">
          <h3>Tasks List</h3>
          <TaskList />
        </div>
      </div>
    </>
  )
}

