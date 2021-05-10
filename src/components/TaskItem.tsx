import React from 'react'
import { ListItem, ListItemText, IconButton } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { Task } from 'customTypes';

interface Props {
  task: Task,
  index: number
  onDelete: (id: string) => void
}

const TaskItem: React.FC<Props> = ({ task, index, onDelete }: Props) => {
  return (
    <ListItem key={index} style={{ backgroundColor: 'lightgray', borderRadius: '4px', marginBottom: '.25rem' }}>
      <ListItemText primary={task.value}></ListItemText>
      <IconButton color="secondary" onClick={() => onDelete(task.id)} ><CloseIcon /></IconButton>
    </ListItem>
  )
}

export default TaskItem
