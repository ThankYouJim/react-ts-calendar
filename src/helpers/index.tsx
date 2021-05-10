export const MODE = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
}

export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function deltaDate(date: Date, d: {
  year?: number,
  month?: number,
  day?: number
}) {
  const { year, month, day } = d;
  return new Date(
    date.getFullYear() + (year || 0),
    date.getMonth() + (month || 0),
    date.getDate() + (day || 0),
  );
}

export function getMonthName(date: Date) {
  return date.toLocaleString('default', { month: 'long' })
}