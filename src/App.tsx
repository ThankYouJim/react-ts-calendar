import React, { useState } from 'react';
import { v4 } from 'uuid';
import Taskbox from './components/Taskbox';
import { Task } from './Validator';

import Container from '@material-ui/core/Container';
import { FormControlLabel, Switch } from '@material-ui/core';
import Calendar from './components/Calendar';

const App: React.FC = () => {
  const [showCalendar, setShowCalender] = useState<boolean>(true);
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
    <Container style={{ backgroundColor: 'white', padding: '1.5rem' }} maxWidth="md">
      <FormControlLabel
        control={<Switch checked={showCalendar} onChange={() => setShowCalender(!showCalendar)} />}
        label="Calendar Mode"
      />

      {showCalendar ? <Calendar existingTasks={initialState} /> : <Taskbox existingTasks={initialState} />}
    </Container>
  );
}

export default App;
