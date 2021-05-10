import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid';
import { Task } from 'customTypes';
import { List, TextField, IconButton } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import TaskItem from './TaskItem';
import TaskboxHeader from './TaskboxHeader';

interface Props {
  existingTasks: Task[]
}

const Taskbox: React.FC<Props> = ({ existingTasks }: Props) => {
  const [tasks, setTasks] = useState(existingTasks);
  const [value, setNewValue] = useState<string>('');

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const handleAdd = (value: string) => {
    const newTask: Task = {
      id: v4(),
      value,
      createdDateTime: new Date()
    }
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    console.log(tasks.length);
  }, [tasks])

  const items = tasks.map((task, index) => (<TaskItem key={task.id} task={task} index={index} onDelete={handleDelete} />))
  return (
    <>
      <TaskboxHeader total={tasks.length} />
      {tasks.length > 0 ? (
        <List>
          {items}
        </List>
      )
        : <div>Nothing here!</div>
      }
      <div style={{ display: 'flex' }}>

        <TextField fullWidth label="New Task" value={value} variant="outlined" onChange={(event) => setNewValue(event.target.value)}></TextField>
        <IconButton onClick={() => handleAdd(value)}><AddIcon /></IconButton>
      </div>
    </>
  )
}

export default Taskbox;
