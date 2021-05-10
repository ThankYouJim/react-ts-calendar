import React from 'react'
import { Box, GridList, GridListTile } from '@material-ui/core';
import { DAYS, deltaDate, getMonthName } from 'helpers';

interface Props {
  date: Date  // should always be the first day of month of given date
}

interface rowProps {
  children: React.ReactNode
}

const CalendarMonth = ({ date }: Props) => {
  const daysFromPrevMonth = date.getDay() % 7;
  const daysThisMonth = deltaDate(date, { month: 1, day: -1 }).getDate();

  const MonthHeader = ({ children }: rowProps) => {
    return (
      <GridList cellHeight={30} cols={7} spacing={0}>
        {children}
      </GridList>
    )
  }

  const DayContainer = ({ children }: rowProps) => {
    return (
      <GridList cellHeight={150} cols={7} spacing={0} className="container">
        {children}
      </GridList>
    )
  }

  return (
    <Box display="flex" flexDirection="column" p={2}>
      <Box component='h1' alignSelf="center">{getMonthName(date)}</Box>
      <MonthHeader>
        {DAYS.map((day) => (<GridListTile key={day} className="item"><div>{day}</div></GridListTile>))}
      </MonthHeader>
      <DayContainer>
        {Array(daysFromPrevMonth).fill(null).map((_, index) => (
          <GridListTile key={index}></GridListTile>
        ))}
        {Array(daysThisMonth).fill(null).map((_, index) => (
          <GridListTile key={index} className="item">
            <div>{index + 1}</div>
          </GridListTile>
        ))}
      </DayContainer >
    </Box>
  )
}

export default CalendarMonth
