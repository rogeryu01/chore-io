import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChoreService, Chore } from '../chore.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})


export class LeaderboardComponent {
  //public chores$: Observable<Chore[]>;


  constructor(private userService: UserService, private router: Router) {
   // this.chores$ = this.userService.getUserPoints()
  }
}
