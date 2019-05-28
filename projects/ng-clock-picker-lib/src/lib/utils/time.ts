import { defaults, hours, FORMAT_24 } from './constants';
import { HoursMode } from '../classes/HoursMode';

export function convertToTimeFormat(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

export function parseTimeString(time: string): { hours: number; minutes: number; scope: string } {
  if (!time) { return defaults; }

  const date = new Date(`11/11/11 ${time}`);
  const scope = determineScope(date.getHours());

  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    scope,
  };
}

export function determineScope(hour: number): string {
  for (const key in hours) {
    if (hours[key].indexOf(hour) >= 0) { return key; }
  }
}

export function getDisplayTime(
  // tslint:disable-next-line:no-shadowed-variable
  hours: number, 
  minutes: number,
  mode: HoursMode,
  is24: boolean,
  format?: string
): string {

  console.log('getDisplayTime hours: ', hours);
  console.log('getDisplayTime minutes: ', minutes);
  console.log('getDisplayTime mode: ', mode);
  console.log('getDisplayTime is24: ', is24);
  console.log('getDisplayTime format: ', format);

  const date = new Date();
  date.setHours((mode.isHoursModePM && !is24)  ? hours + 12 : hours);
  date.setMinutes(minutes);


  return format === FORMAT_24 
  ? date.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })
  : date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
