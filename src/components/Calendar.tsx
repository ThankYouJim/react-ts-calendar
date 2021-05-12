import React, { useState, useEffect, useRef } from 'react'
import { Box, IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { Task } from 'customTypes'
import './Calendar.css';
import CalendarMonth from 'components/CalendarMonth';
import { MODE, deltaDate } from 'helpers';

interface Props {
  existingTasks: Task[],
}

const KEY_LEFT = '37';
const KEY_RIGHT = '39';

const Calendar: React.FC<Props> = ({ existingTasks }: Props) => {
  const ref = useRef(null);
  const mode: string = MODE.MONTH;
  const [today, setToday] = useState(new Date());
  const [date, setDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const handleArrowKeys = (event: React.KeyboardEvent) => {
    console.log('???', event);
    // switch (keyEvent.key) {
    //   case KEY_LEFT:
    //     prev();
    //     break;
    //   case KEY_RIGHT:
    //     next();
    //     break;
    //   default:
    //     break;
    // }
  }

  const prev = () => {
    switch (mode) {
      case MODE.DAY:
        setDate(deltaDate(date, { day: -1 }))
        break;
      case MODE.WEEK:
        setDate(deltaDate(date, { day: -7 }))
        break;
      case MODE.MONTH:
        setDate(deltaDate(date, { month: -1 }))
        break;
      default:
        break;
    }
  }

  const next = () => {
    switch (mode) {
      case MODE.DAY:
        setDate(deltaDate(date, { day: 1 }))
        break;
      case MODE.WEEK:
        setDate(deltaDate(date, { day: 7 }))
        break;
      case MODE.MONTH:
        setDate(deltaDate(date, { month: 1 }))
        break;
      default:
        break;
    }
  }

  return (
    <Box display="flex" alignItems="center">
      <IconButton aria-label="left" onClick={prev}>
        <ChevronLeftIcon />
      </IconButton>

      {/* hack to assign ref */}
      <Box flexGrow={1}>
        {/* day/taskbox */}
        {/* week */}
        {/* month */}
        {mode === MODE.MONTH && <CalendarMonth date={date} />}
        {/* year? */}
      </Box>

      <IconButton aria-label="right" onClick={next}>
        <ChevronRightIcon />
      </IconButton>
    </Box >
  )
}

export default Calendar
