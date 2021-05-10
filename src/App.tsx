import React from 'react';
import { v4 } from 'uuid';
import { Task } from 'customTypes';

import Container from '@material-ui/core/Container';
import Calendar from './components/Calendar';

const App: React.FC = () => {

  const initialState: Task[] = [{
    id: v4(),
    value: 'go to the gym',
    createdDateTime: new Date()
  }, {
    id: v4(),
    value: 'take meds',
    createdDateTime: new Date()
  }];

  return (
    <Container style={{ backgroundColor: 'white' }} maxWidth="md">
      <Calendar existingTasks={initialState} />
    </Container>
  );
}

export default App;
