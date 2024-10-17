import React from 'react';
import { Container, TextField, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './features/tasks/tasksSlice';
import Board from './components/Board';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  // State to control the visibility of the TaskForm dialog
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  // Function to open the TaskForm dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the TaskForm dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <h1>Kanban Board-Task Manager</h1>
      {
        // TextField for searching tasks
        <TextField
          label="Search tasks here..."
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))} // Dispatch search query to Redux store
          sx={{
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#3f51b5',
              },
              '&:hover fieldset': {
                borderColor: '#303f9f',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1a237e',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#3f51b5',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#1a237e',
            },
          }}
        />
      }
      {/* Board component to display tasks */}
      <Board />
      {/* Floating action button to open the TaskForm dialog */}
      <Fab color="primary" aria-label="add" onClick={handleOpen} className="fab">
        <AddIcon />
      </Fab>
      {/* TaskForm component for adding new tasks */}
      <TaskForm open={open} handleClose={handleClose} />
    </Container>
  );
}

export default App;