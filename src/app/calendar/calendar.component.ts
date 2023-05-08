import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { ChoreService, Chore } from '../chore.service';
import { startOfDay } from 'date-fns';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  public chores$: Observable<Chore[]>;

  constructor(private choreService: ChoreService, private router: Router) {
    this.chores$ = choreService.getAllChores();
  }

  public static Route = {
    path: 'calendar',
    component: CalendarComponent,
  }
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;


  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Cleaning the car',
    }
  ]

  newChoreName = '';
  newChoreDescription = '';
  newChorePerson = '';
  chores: Chore[] = [];

  deleteChore(chore: Chore) {
    const index = this.chores.indexOf(chore);
    this.chores.splice(index, 1);
  }
}