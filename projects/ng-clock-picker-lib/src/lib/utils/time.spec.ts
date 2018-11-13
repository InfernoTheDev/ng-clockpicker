import { async } from '@angular/core/testing';

import { convertToTimeFormat, getTime } from './time';
import { getDateStringFromTime } from '../tests/utils';

describe('convertToTimeFormat', () => {
  it('returns correct values', async(() => {
    expect(convertToTimeFormat(1)).toBe('01');
    expect(convertToTimeFormat(2)).toBe('02');
    expect(convertToTimeFormat(12)).toBe('12');
    expect(convertToTimeFormat(0)).toBe('00');
  }));
});


describe('getTime', () => {
  it('returns correct values', async(() => {
    expect(getDateStringFromTime(getTime(10, 10, 'PM'))).toBe(getDateStringFromTime('22:10'));
    expect(getDateStringFromTime(getTime(10, 10, 'AM'))).toBe(getDateStringFromTime('10:10'));
    expect(getDateStringFromTime(getTime(5, 20, 'PM'))).toBe(getDateStringFromTime('17:20'));
    expect(getDateStringFromTime(getTime(5, 10, 'AM'))).toBe(getDateStringFromTime('05:10'));
  }));
});
