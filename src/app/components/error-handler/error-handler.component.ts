import { Component, Input } from '@angular/core';

@Component({
  selector: 'auth-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent  {

  @Input()
  errors;
  constructor() { }
}
