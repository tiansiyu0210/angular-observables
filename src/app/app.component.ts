import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user1Actived = false;
  user2Actived = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Actived = true;
          this.user2Actived = false;
        } else if ( id === 2) {
          this.user1Actived = false;
          this.user2Actived = true;
        }
      }
    );
  }
}
