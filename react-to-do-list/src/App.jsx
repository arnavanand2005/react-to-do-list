import React, { useState } from 'react';
import TodoComponent from './Todolist';
import Snowflakes from './Snowflakes.jsx';
import './index.css';

const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [task, setTask] = useState('');

  const colors = [
    '#ff8a80', '#ea80fc', '#8c9eff', '#80d8ff', 
    '#a7ffeb', '#ccff90', '#ffff8d', '#ff9e80',
    '#ff80ab', '#b388ff', '#82b1ff', '#84ffff',
    '#b9f6ca', '#f4ff81', '#ffd180', '#d7ccc8'
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() === '') return;
    setTodolist([...todolist, { 
      text: task.trim(), 
      color: getRandomColor(),
      id: Date.now()
    }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTodolist(todolist.filter(task => task.id !== id));
  };

  const moveTask = (index, direction) => {
    if ((direction === 'up' && index === 0) || 
        (direction === 'down' && index === todolist.length - 1)) return;
    
    const newList = [...todolist];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    [newList[index], newList[newIndex]] = [newList[newIndex], newList[index]];
    setTodolist(newList);
  };

  return (
    <>
      <Snowflakes />
      <div className="todo-container">
        <TodoComponent
          task={task}
          todolist={todolist}
          setTask={setTask}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />
      </div>
    </>
  );
};

export default App;