import { TextField, Box, Button } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({addTask}) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (taskName === '') {
      return;
    }
    
    const id = uuidv4();
    addTask({id, taskName});

    setTaskName('');
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField value={taskName} onChange={(e) => setTaskName(e.target.value)} autoFocus fullWidth id='task' label='Task' required size='small' type='text' variant='outlined' color='success'></TextField>
      <Button type='submit' color='success' fullWidth variant='contained' sx={{my: 2}}>Add Task</Button>
    </Box> 
  )
}

export default AddTask;