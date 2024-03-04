import React, { useState } from 'react';

const TodoItem = ({ task, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {task}
      {isHovered && <button onClick={onDelete}>❌</button>}
    </li>
  );
};

export default TodoItem;

