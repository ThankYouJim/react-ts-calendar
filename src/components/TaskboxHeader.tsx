import React from 'react'

interface Props {
  total: number
}

const TaskboxHeader = ({ total }: Props) => {
  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <h1>Did I ...?</h1>
      <p>Tasks: {total}</p>
    </div >
  )
}

export default TaskboxHeader
