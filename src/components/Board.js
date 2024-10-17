import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { updateTaskStatus } from '../features/tasks/tasksSlice';

// Define the columns and their titles
const columns = {
  todo: 'To Do',
  inprogress: 'In Progress',
  peerreview: 'Peer Review',
  done: 'Done',
};

const Board = () => {
  // Select tasks and search query from the Redux store
  const tasks = useSelector(state => state.tasks.tasks);
  const searchQuery = useSelector(state => state.tasks.searchQuery);
  const dispatch = useDispatch();

  // Handle the drag end event
  const onDragEnd = (result) => {
    // If there's no destination, do nothing
    if (!result.destination) return;

    // Dispatch action to update task status
    dispatch(updateTaskStatus({ id: result.draggableId, status: result.destination.droppableId }));
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // DragDropContext to handle drag and drop functionality
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {/* Map through columns and render Column components */}
        {Object.entries(columns).map(([columnId, columnName]) => (
          <Column
            key={columnId}
            columnId={columnId}
            columnName={columnName}
            tasks={filteredTasks.filter(task => task.status === columnId)} // Filter tasks by column
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;