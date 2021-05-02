import React, { useState } from 'react'
import { v4 } from 'uuid';
import { Task } from '../Validator';

import { List, TextField, IconButton } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import TaskItem from './TaskItem';

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


  const items = tasks.map((task, index) => (<TaskItem key={task.id} task={task} index={index} onDelete={handleDelete} />))
  return (
    <>
      <List>
        {items}
      </List>
      <TextField label="New Task" value={value} variant="outlined" onChange={(event) => setNewValue(event.target.value)}></TextField>
      <IconButton onClick={() => handleAdd(value)}><AddIcon /></IconButton>
    </>
  )
}

export default Taskbox;
