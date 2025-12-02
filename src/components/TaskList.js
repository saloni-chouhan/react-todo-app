import React, {useContext} from 'react';
import { TodoContext } from "../context/TodoContext";

const TaskList = () => {
  const { taskList, setTaskList } = useContext(TodoContext);

  const toggleTask = (event, index) => {
    const checked = event.target.checked;
    const updated = [...taskList]
    updated[index].completed = checked;
    setTaskList(updated);
  }

  const removeItem = (event, index) => {
    const newTaskList = [...taskList];
    const item = event.target.value;
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  }

  return (
    taskList.length == 0 ? <h6 className="text-muted">No Task Added Yet!</h6> :
    <div className="list-group mt-3">
      {taskList.map((task, index) => (
        <li key={index} className={`list-group-item d-flex align-items-center justify-content-center gap-3`}>
          <input type="checkbox" id={`${task.name}-${index}`} className="gap-3" checked={task.completed} onChange={(e) => {toggleTask(e, index)}} />
          <span className={`${task.completed ? "text-decoration-line-through" : "none"}`}>
            {task.name}
          </span>
          <button type="button" className="btn btn-danger" value={`remove-task-${index}`} onClick={(e) => {removeItem(e, index)}}>Delete</button>
        </li>
      )
    )}
    </div>
  )
}

export default TaskList;
