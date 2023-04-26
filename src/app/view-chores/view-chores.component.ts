import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChoreService, Chore } from '../chore.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-chores',
  templateUrl: './view-chores.component.html',
  styleUrls: ['./view-chores.component.css']
})
export class ViewChoresComponent {
  
  public chores$: Observable<Chore[]>;

  constructor(private choreService: ChoreService, private router: Router) { 
      this.chores$ = choreService.getAllChores();

  }

  

}