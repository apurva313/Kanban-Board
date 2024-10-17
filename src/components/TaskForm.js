import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { addTask } from '../features/tasks/tasksSlice';

// TaskForm component for adding new tasks
const TaskForm = ({ open, handleClose }) => {
  // State to manage task title and description
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmit = () => {
    const newTask = {
      id: Date.now().toString(), // Generate a unique ID for the task
      title,
      description,
      status: 'todo', // Default status for new tasks
    };
    dispatch(addTask(newTask)); // Dispatch action to add the new task
    setTitle(''); // Reset title input
    setDescription(''); // Reset description input
    handleClose(); // Close the dialog
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        {/* TextField for task title */}
        <TextField 
          autoFocus
          margin="dense"
          label="Task Title"
          type="text"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* TextField for task description */}
        <TextField 
          margin="dense"
          label="Task Description"
          type="text"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        {/* Button to cancel the form */}
        <Button onClick={handleClose}>Cancel</Button>
        {/* Button to submit the form */}
        <Button onClick={handleSubmit}>Add Task</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;