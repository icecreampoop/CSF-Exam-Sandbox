import { Component } from '@angular/core';

@Component({
  selector: 'app-first-try',
  templateUrl: './first-try.component.html',
  styleUrl: './first-try.component.css'
})
export class FirstTryComponent {
  isActive: boolean = true;
  hasError: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  toggleError() {
    this.hasError = !this.hasError;
  }
}
