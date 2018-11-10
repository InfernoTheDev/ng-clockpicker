import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ClockPickerDirective } from './directives/clock-picker.directive';
import { DynamicComponentsService } from './services/dynamic-components.service';
import { ClockPickerDialogComponent } from './components/clock-picker-dialog/clock-picker-dialog.component';
import { CircleComponent } from './components/circle/circle.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { TimeDisplayComponent } from './components/time-display/time-display.component';

@NgModule({
  declarations: [ClockPickerDirective, ClockPickerDialogComponent, CircleComponent, CircleButtonComponent, TimeDisplayComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [ClockPickerDirective],
  providers: [DynamicComponentsService],
  entryComponents: [ClockPickerDialogComponent],
})
export class NgClockPickerLibModule { }
