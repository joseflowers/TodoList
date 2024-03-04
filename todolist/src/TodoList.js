import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Verifica la ruta aquí

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks, add some tasks!</p>
        ) : (
          tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              onDelete={() => handleDeleteTask(index)}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
