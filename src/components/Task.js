import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

// Task component to display individual tasks
const Task = ({ task, index }) => {
  return (
    // Draggable component for drag and drop functionality
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        // Container for the task
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* Task title */}
          <h3>{task.title}</h3>
          {/* Task description, truncated if longer than 50 characters */}
          <p>{task.description.length > 50 ? `${task.description.substring(0, 50)}...` : task.description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Task;