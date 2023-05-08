import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChoreService, Chore } from '../chore.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService, User } from '../user.service';


@Component({
  selector: 'app-view-chores',
  templateUrl: './view-chores.component.html',
  styleUrls: ['./view-chores.component.css']
})
export class ViewChoresComponent {

  public chores$: Observable<Chore[]>;
  public userChores$: Observable<Chore[]>;
  public displayChores: Chore[] = []
  public userId: Number = 2

  constructor(private choreService: ChoreService, private userService: UserService, private router: Router) {
    this.chores$ = this.choreService.getAllChores();
    this.userChores$ = this.choreService.getChoresByUser(this.userId);
    //console.log(this.userChores$)
    //this.chores$.subscribe((x => this.displayChores = this.displayChores.concat(x)))
    //console.log(this.displayChores)

  }


  public changeUser(userId: number): void {
    this.userId = userId;
    this.userChores$ = this.choreService.getChoresByUser(this.userId);

  public performChore(chore: Chore): void {
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