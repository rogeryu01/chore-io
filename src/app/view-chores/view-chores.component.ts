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

  performChore(chore: Chore) {
    chore.completionStatus = "Complete"
    this.choreService.updateChore(chore)
   // Assuming the chore object has an "isDone" property to track its completion status
  }

  toggleTaskStatus(chore: Chore) {
    if (chore.completionStatus === 'In Progress') {
      chore.completionStatus = 'Complete';
    } else {
      chore.completionStatus = 'In Progress';
    }
    this.choreService.updateChore(chore);
  }

}