export const config = {
  hours: Array(12).fill(0, 0, 12).map((_, i) => i + 1),
  minutes: Array(60).fill(0, 0, 60).map((_, i) => i),
};

export const defaults = {
  hours: 12,
  monutes: 0,
};

export const MODE_MINUTES = 'minutes';
export const MODE_HOURS = 'hours';
export const HOURS_MODE_AM = 'AM';
export const HOURS_MODE_PM = 'PM';
