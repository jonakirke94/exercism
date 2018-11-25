const HOURS_DAY = 24;
const MINUTES_HOUR = 60;

const formatDisplay = num => (num.toString().length > 1 ? num : `0${num}`);

const rollHours = (hour) => {
  const rolled = (hour < 0 ? HOURS_DAY - ((HOURS_DAY - hour) % HOURS_DAY) : hour % HOURS_DAY);
  return rolled === 24 ? 0 : rolled;
};


const rollMinutes = (minutes) => {
  let formattedM = minutes;
  let hoursFromMinutes = 0;
  do {
    if (formattedM < 0) {
      hoursFromMinutes -= 1;
      formattedM += MINUTES_HOUR;
    }

    if (formattedM - MINUTES_HOUR >= 0) {
      hoursFromMinutes += 1;
      formattedM -= MINUTES_HOUR;
    }
  } while (formattedM < 0 || formattedM >= MINUTES_HOUR);

  return {
    minutes: formattedM,
    hoursFromMinutes,
  };
};

export const at = (hours, minutes = 0) => {
  let formattedM = minutes;
  const rollMinutesObj = rollMinutes(formattedM);
  const { hoursFromMinutes } = rollMinutesObj;
  formattedM = rollMinutesObj.minutes;
  const rolledHours = rollHours(hours + hoursFromMinutes);
  return `${formatDisplay(rolledHours)}:${formatDisplay(formattedM)}`;
};

const manipulateTime = (clock, time, operation) => {
  const timeArr = clock.split(':');
  const hours = timeArr[0];
  const minutes = timeArr[1];

  const rolledMinObj = operation === 'ADD' ? rollMinutes(Number(minutes) + time) : rollMinutes(Number(minutes) - time);
  const formattedH = rollHours(Number(hours) + rolledMinObj.hoursFromMinutes);
  const formattedM = rolledMinObj.minutes;
  return `${formatDisplay(formattedH)}:${formatDisplay(formattedM)}`;
};

String.prototype.plus = function (time) {
	return manipulateTime(this, time, 'ADD');
};

String.prototype.minus = function (time) {
  return manipulateTime(this, time, 'SUBSTRACT');
};

String.prototype.equals = function (clock) {
	return this === clock;
}


