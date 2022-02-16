import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    isInvisible = false;
    buttonClicks: number[] = [];

    toggleInvisible(): void {

      this.isInvisible = !this.isInvisible;
    }

    addTimestamp(): void {

      const timeStamp = Date.now();
      console.log(typeof timeStamp);
      console.log(timeStamp);

      this.buttonClicks.push(timeStamp);
    }

    biggerThan5(count: number) {

      return count > 5;
    }

  getColor(count: number) {

      return (this.biggerThan5(count)) ? 'blue' : 'white';

  }
}
