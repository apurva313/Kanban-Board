import { createSlice } from '@reduxjs/toolkit';

// Initial tasks array with predefined tasks
const initialTasks = [
  { id: '1', title: 'Morning Routine', description: 'Complete morning exercises and breakfast', status: 'todo' },
  { id: '2', title: 'Github', description: 'Update repository with latest changes', status: 'inprogress' },
  { id: '3', title: 'Doing Documentation', description: 'Write and review project documentation', status: 'peerreview' },
  { id: '4', title: 'Assignment Complete', description: 'Finish and submit the assignment', status: 'done' },
];

// Create a slice for tasks with initial state and reducers
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: initialTasks, // Initial tasks state
    searchQuery: '', // Initial search query state
  },
  reducers: {
    // Reducer to add a new task
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    // Reducer to update the status of a task
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    // Reducer to set the search query
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// Export actions to be used in components
export const { addTask, updateTaskStatus, setSearchQuery } = tasksSlice.actions;

// Export the reducer to be used in the store
export default tasksSlice.reducer;