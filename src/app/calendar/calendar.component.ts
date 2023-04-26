import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { Router } from '@angular/router';

interface Chore {
  name: string;
  description: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

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
  //assume data from db
//example: Hospital appointment info
//let data=fromdb();
//for(let x of data)
//{
//this.events = [
//          ...this.events,
 //         {
	//start:x["appointment_date"],
//	title:x["patient_name"]+x["medical_problem"]
// 	 }
//	]
//}


  newChoreName = '';
  newChoreDescription = '';
  newChorePerson ='';
  chores: Chore[] = [];

  onSubmit() {
    const newChore: Chore = {
      name: this.newChoreName,
      description: this.newChoreDescription,
  
    };

    this.chores.push(newChore);
    this.newChoreName = '';
    this.newChoreDescription = '';
    this.newChorePerson = '';
  }

  deleteChore(chore: Chore) {
    const index = this.chores.indexOf(chore);
    this.chores.splice(index, 1);
  }
}
