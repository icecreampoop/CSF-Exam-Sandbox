import { Component } from '@angular/core';

interface MyProperties {
  firstTryVisible: boolean;
  secondTryVisible: boolean;
  thirdTryVisible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements MyProperties{
  
  title = 'PlayingWithAngular';
  firstTryVisible: boolean = false;
  secondTryVisible: boolean = false;
  thirdTryVisible: boolean = false;

  showTry(x : keyof MyProperties): void {
    this[x] = !this[x];
  }
}
