import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChoreService, Chore } from '../chore.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';


@Component({
  selector: 'app-view-chores',
  templateUrl: './view-chores.component.html',
  styleUrls: ['./view-chores.component.css']
})
export class ViewChoresComponent {

  public chores$: Observable<Chore[]>;
  public userChores$: Observable<Chore[]>;


  constructor(private choreService: ChoreService, private userService: UserService, private router: Router) {
    this.chores$ = this.choreService.getAllChores()
    this.userChores$ = this.choreService.getChoresByUser()
   
  }


}


