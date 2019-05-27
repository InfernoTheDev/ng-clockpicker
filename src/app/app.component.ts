import { Component, ViewEncapsulation, ViewContainerRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClockPickerDialogService, ClockPickerConfig } from 'ng-clock-picker-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  configA: ClockPickerConfig = { wrapperClassName: 'my-class-name', closeOnOverlayClick: true,  is24: false };
  configB: ClockPickerConfig = { wrapperClassName: 'my-class-name', closeOnOverlayClick: true,  is24: true };

  form: FormGroup = this.formBuilder.group({ time: [''] });

  constructor(
    private vcr: ViewContainerRef, 
    private formBuilder: FormBuilder, 
    private clockPickerDialogService: ClockPickerDialogService
  ) {

  }

  ngOnInit() {
    this.clockPickerDialogService.registerViewContainerRef(this.vcr);
  }

  showModal(): void {
    console.log('show modal');
    console.log('this.clockPickerDialogService', this.clockPickerDialogService);
    this.clockPickerDialogService
    .showClockPickerDialog(this.configB)
    .subscribe(
      (time: string) => {
        console.log(time)
      },
      (error) => console.log('error', error)
    )
  }

}
