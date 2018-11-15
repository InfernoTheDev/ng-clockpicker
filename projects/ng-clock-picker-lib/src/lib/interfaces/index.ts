export interface ClockPickerConfig {
  wrapperClassName?: string;
  buttonCancel?: string;
  buttonConfirm?: string;
  closeOnOverlayClick?: boolean;
  is24?: boolean;
}

export interface SelectedTime {
  hours: number;
  minutes: number;
}

export interface ClockFaceConfig {
  radius: number;
  offset: number;
}

export interface CentralPointCoordinates {
  x1: number;
  y1: number;
}

export interface ClockFaceItem extends CentralPointCoordinates {
  y2: number;
  x2: number;
  display: number;
}
