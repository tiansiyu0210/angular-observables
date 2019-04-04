import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumber = Observable.interval(1000);
    // myNumber.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    const myObs = Observable.create(
      (obs: Observer<string>) => {
        setTimeout(
          () => {
            obs.next('first package');
          }, 2000 );
        setTimeout(
          () => {
            obs.next('second package');
          }, 4000);
        setTimeout(
          () => {
            obs.error('error package');
          }, 6000);
      }
    );

    myObs.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.log(error); },
      () => {console.log('complete'); }
    );
  }

}
