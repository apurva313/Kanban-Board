import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

// Column component to display tasks in a specific column
const Column = ({ columnId, columnName, tasks }) => {
  return (
    // Droppable area for drag and drop functionality
    <Droppable droppableId={columnId}>
      {(provided) => (
        // Container for the column
        <div className="column" {...provided.droppableProps} ref={provided.innerRef}>
          {/* Column title */}
          <h2>{columnName}</h2>
          {/* Map through tasks and render Task components */}
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {/* Placeholder for the droppable area */}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;