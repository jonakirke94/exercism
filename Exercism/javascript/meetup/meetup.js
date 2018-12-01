const ORDINALS = ['1st', '2nd', '3rd', '4th', '5th'];
const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const handleLast = (year, month, weekDay) => {
  const date = new Date(year, month + 1, 0);
  while (date.getDay() !== weekDay) {
    date.setDate(date.getDate() - 1);
  }
  return date;
};

const handleTeenth = (year, month, weekDay) => {
  const date = new Date(year, month, 10);
  date.setDate(10 + (weekDay + (7 - date.getDay())) % 7);
  return date;
};

export const meetupDay = (year, month, day, descriptor) => {
  const weekDay = WEEK_DAYS.indexOf(day);

  if (descriptor === 'teenth') {
    return handleTeenth(year, month, weekDay);
  }

  if (descriptor === 'last') {
    return handleLast(year, month, weekDay);
  }

  // ordinals
  const date = new Date(year, month);
  const factor = ORDINALS.indexOf(descriptor);
  date.setDate((7 * factor + 1) + (weekDay + (7 - date.getDay())) % 7);

  if (date.getMonth() !== month) {
    throw new Error();
  }
  return date;
};
