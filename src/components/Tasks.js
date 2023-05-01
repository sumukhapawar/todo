import { Paper, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Tasks = ({tasks, removeTask}) => {
  return (
    tasks.map((task) => {
        return (
            <Paper sx={{my: 1, p: 1, bgcolor: 'grey.200', display: 'flex', justifyContent: 'space-between'}} key={task.id} variant='outlined'>
                <Typography component='div' variant='h5'>
                    {task.taskName}
                </Typography>
                <Button onClick={() => removeTask(task.id)} color='error' variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
            </Paper>
        )
    })
  )
}

export default Tasks;