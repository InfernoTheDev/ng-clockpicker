import { Injectable } from '@angular/core';

import { config, defaultConfig } from '../utils/constants';
import { parseTimeString } from '../utils/time';
import { ClockPickerConfig, TimeConfig } from '../interfaces';
import { Time } from '../classes/Time';

@Injectable()
export class ClockPickerService {
  _config: ClockPickerConfig = defaultConfig;
  _time: Time;

  init(): void {

    // TODO: For hard code to TRUE for the clock is only show 24 clock
    this.config.is24 = true;

    const { initialValue, is24 } = this.config;
    this._time = new Time(<TimeConfig>{ ...parseTimeString(initialValue), is24 });
  }

  get Time(): Time {
    return this._time;
  }

  set config(clockPickerConfig: ClockPickerConfig) {
    this._config = clockPickerConfig;
  }

  get config(): ClockPickerConfig {
    return this._config;
  }

  clockValues(mode: string) {
    return config(this.Time.HoursScope.value)[mode];
  }


  constructor() { }
}
