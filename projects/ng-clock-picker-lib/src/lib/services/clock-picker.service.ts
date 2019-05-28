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

    // TODO: Static 24 hours value
    this.config.is24 = true;
    
    const { initialValue, is24, format } = this.config;

    console.log('ClockPickerService this.config', this.config);
    console.log('ClockPickerService initialValue', initialValue);

    this._time = new Time(<TimeConfig>{ ...parseTimeString(initialValue), is24, format });
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
