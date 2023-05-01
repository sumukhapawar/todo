import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { useState } from 'react';
// Material UI components
import { Container, Box, Typography } from '@mui/material';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  
  return (
    <Container component="div" className='App' sx={{}}>
      <Box 
        sx={{
          border: 1,
          borderRadius: 2,
          py: 2,
          px: 1,
          maxWidth: '50%',
          boxShadow: 1,
          mx: 'auto',
          my: 5
      }}>
        <Header />
        <AddTask addTask={addTask} />
        {tasks.length > 0 
          ? <Tasks removeTask={removeTask} tasks={tasks} />
          : <Typography>No Tasks to show</Typography>
        }
      </Box>
    </Container>
  );
}

export default App;
