import React from 'react';
import { v4 } from 'uuid';
import Taskbox from './components/Taskbox';
import { Task } from './Validator';

import Container from '@material-ui/core/Container';

const App: React.FC = () => {
  const initialState: Task[] = [{
    id: v4(),
    value: 'abc',
    createdDateTime: new Date()
  }, {
    id: v4(),
    value: '123',
    createdDateTime: new Date()
  }];

  return (
    <Container style={{ backgroundColor: 'white', padding: '1.5rem' }} maxWidth="md">
      <h1>Have I done...?</h1>
      <Taskbox existingTasks={initialState} />
    </Container>
  );
}

export default App;
