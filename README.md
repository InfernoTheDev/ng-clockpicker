

<p align="center">
  <img src="https://lh3.googleusercontent.com/fWa0fhHGVT4ltgpB96VE3uh1GEkFWMwN5Et7YF5yVI45U5RGYbFQIbpeydvEe5X7kiA_3tAMeNfRHbkkgJVPg3ERBB9UBfnq_MqtMqkF512zXBT_KtXfDCxWx7gmnBhegHXLZNHpO0Pc4sjCInFqYptKfrey3YjHqiYFPdLktXSlPc5eakvnwQxDBLMZ1bPbGhql9KSJyTNaJB0r98h3vi4QZKJyFTs2yu1i77axieMLq7PPty1OQ5HRd-p58wDvJKP5TiYh2v2Q1Lh1ouemSAfx0UqdZeDI-zypeEbcIzzqPA5-ga5SmRNn0FDNhZ6TUgQOpzAM6fz-z7YIXgXqYHQPDterLSatbgIyCgeGTKTfqeU9k5OTr2yJ5gJbGp0ti7bRcOUMRAYYtsImnzfwEqUBOp-k4ptSi75C5sT-XSFD1yKVOyyPccJ56_oRPbz4y3e5T-Cc4SQtRoRgAjymLpV_cQRH0SRDeOZ-EChafgn_kcjaImwV70QYeN-jTP58Wk_s5jGSBMvFExolyndML3KoPbXWJzcsHQ10a4kjVots2NUfweGAuwocPDQPyvgtDL5VozhakidmrH6MgWD89q2rLkOknmuZK4xdPQo=w1920-h944">
</p>

# Notice !!

This is a custom version to use it on my own. 


## Install

`npm i ng-clock-picker-lib-voova --save`

## Usage
- Please use it as "By injecting service straight into component" you can see in the bottom of this README file
- Normal behavior from original will not work




<br><br>
# Original Docs
---
### ng-clock-picker

[![CircleCI](https://circleci.com/gh/jedrzejiwanicki/ng-clockpicker/tree/master.svg?style=svg)](https://circleci.com/gh/jedrzejiwanicki/ng-clockpicker/tree/master)

<p align="center">
  <img src="https://media.giphy.com/media/nlYGE0dAam6plYGdS7/giphy.gif">
</p>


## Demo 

[Demo](http://jedrzejiwanicki.github.io/ng-clockpicker)

## Install

`npm i ng-clock-picker-lib --save`


## Usage

Add `NgClockPickerLibModule` to your module imports:

```typescript
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import { NgClockPickerLibModule } from 'ng-clock-picker-lib';
 
 import { AppComponent } from './app.component';
 
 @NgModule({
   declarations: [
     AppComponent,
   ],
   imports: [
     BrowserModule,
     NgClockPickerLibModule,
     ReactiveFormsModule,
     FormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }

```

#### With reactive forms:
```angular2html
<form [formGroup]="form">
  <input ngClockPicker [ngClockPickerConfig]="config" formControlName="time" />
</form>
```

#### With template driven forms:
```angular2html
<input [(ngModel)]="time" ngClockPicker [ngClockPickerConfig]="config" />
```

#### With event binding:
```angular2html
<input ngClockPicker (ngClockPickerChange)="handleTimeChange($event)" />
```

#### By injecting service straight into component:

```typescript
import { Component, ViewContainerRef } from '@angular/core';
import { ClockPickerDialogService, ClockPickerConfig } from 'ng-clock-picker-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config: ClockPickerConfig = { 
    wrapperClassName: 'className', 
    closeOnOverlayClick: true 
  };
  
  constructor(private vcr: ViewContainerRef, private clockPickerDialogService: ClockPickerDialogService) {}
  

  ngOnInit(): void {
    this.clockPickerDialogService.registerViewContainerRef(this.vcr);
  }
  
  showModal(): void {
    this.clockPickerDialogService.showClockPickerDialog(this.config).subscribe((time: string) => console.log(time))
  }
}

```

### Config:

The option "is24" will not work on this repo

```typescript
export interface ClockPickerConfig {
  wrapperClassName?: string;
  buttonCancel?: string;
  buttonConfirm?: string;
  closeOnOverlayClick?: boolean;
  initialValue?: string;
  is24?: boolean; 
}
```

### Styling:

Customize your clock picker styles by passing `wrapperClassName` to config object.

#### Examples:

```scss
  .my-class-name .clock-picker__item-button--selected {
    background-color: $color-primary;
    color: $color-text-light;
  }
  
  .my-class-name .clock-picker__item-button--selected:hover {
    background-color: $color-primary;
    color: $color-text-light;
  }
  
  .my-class-name .clock-picker__clock-face .clock-picker__clock-face__tick {
    stroke: $color-primary;
  }
  
  .my-class-name .clock-picker__clock-face .clock-picker__clock-face__center {
    fill: $color-primary;
  }

```
