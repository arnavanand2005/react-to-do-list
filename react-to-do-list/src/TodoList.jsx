import React from 'react';
import './index.css';

const TodoComponent = ({ 
  task, 
  todolist, 
  setTask, 
  addTask, 
  deleteTask, 
  moveTask 
}) => {
  return (
    <div className="todo-component">
      <form onSubmit={addTask}>
        <input
          className="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="What do you feel like doing?"
        />
        <button type="submit" className="add">Add</button>
      </form>
      <ul>
        {todolist.map((item, index) => (
          <li key={item.id} style={{ backgroundColor: item.color }}>
            <span>{item.text}</span>
            <div>
              <button onClick={() => deleteTask(item.id)} className="delete">Delete</button>
              <button 
                onClick={() => moveTask(index, 'up')} 
                className="up"
                disabled={index === 0}
              >
                ⬆️
              </button>
              <button 
                onClick={() => moveTask(index, 'down')} 
                className="down"
                disabled={index === todolist.length - 1}
              >
                ⬇️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;