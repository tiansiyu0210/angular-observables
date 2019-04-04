import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/SubjectSubscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberSubcription: Subscription;
  secondSubcription: Subscription;

  constructor() { }

  ngOnInit() {
    const numberObser = Observable.interval(1000);
    this.numberSubcription = numberObser.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const secondObser = Observable.create(
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

    this.secondSubcription = secondObser.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.log(error); },
      () => {console.log('complete'); }
    );
  }

  ngOnDestroy(): void {
    this.secondSubcription.unsubscribe();
    this.numberSubcription.unsubscribe();
  }

}
