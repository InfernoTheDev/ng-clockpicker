import { ClockPickerConfig } from '../interfaces';

const fullHours: number[] =
  Array(24)
    .fill(0, 0, 24)
    .map((_, i, a) => i === a.length - 1 ? 0 : i + 1);

export const hours = {
  '24h': fullHours,
  '12h': fullHours.slice(0, 12),
};

export const config = (hoursScope: string) => ({
  hours: hours[hoursScope],
  minutes: Array(60).fill(0, 0, 60).map((_, i) => i),
});

export const defaultConfig: ClockPickerConfig = {
  buttonConfirm: 'Confirm',
  buttonCancel: 'Cancel',
  initialValue: '12:00',
  closeOnOverlayClick: false,
  is24: true,
};

export const MODE_MINUTES = 'minutes';
export const MODE_HOURS = 'hours';
export const HOURS_MODE_AM = 'AM';
export const HOURS_MODE_PM = 'PM';
export const HOURS_SCOPE_24 = '24h';
export const HOURS_SCOPE_12 = '12h';
export const FORMAT_12 = 'hour12';
export const FORMAT_24 = 'hour24';

export const defaults = {
  hours: 0,
  minutes: 0,
  scope: HOURS_SCOPE_24,
  is24: true,
  format: null // FORMAT_12 or FORMAT_12
};
