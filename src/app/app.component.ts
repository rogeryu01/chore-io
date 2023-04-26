

// import { Component } from '@angular/core';
// import { CalendarEvent, CalendarView } from 'angular-calendar';
// import { startOfDay } from 'date-fns';

// interface Chore {
//   name: string;
//   description: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   viewDate: Date = new Date(); 
//   view: CalendarView = CalendarView.Week;
//   CalendarView = CalendarView;


//   events: CalendarEvent[] = [
//     {
//       start: startOfDay(new Date()),
//       title: 'Cleaning the car',
//     }
//   ]
//   //assume data from db
// //example: Hospital appointment info
// //let data=fromdb();
// //for(let x of data)
// //{
// //this.events = [
// //          ...this.events,
//  //         {
// 	//start:x["appointment_date"],
// //	title:x["patient_name"]+x["medical_problem"]
// // 	 }
// //	]
// //}


//   newChoreName = '';
//   newChoreDescription = '';
//   newChorePerson ='';
//   chores: Chore[] = [];

//   onSubmit() {
//     const newChore: Chore = {
//       name: this.newChoreName,
//       description: this.newChoreDescription,
  
//     };

//     this.chores.push(newChore);
//     this.newChoreName = '';
//     this.newChoreDescription = '';
//     this.newChorePerson = '';
//   }

//   deleteChore(chore: Chore) {
//     const index = this.chores.indexOf(chore);
//     this.chores.splice(index, 1);
//   }
// }

// KRIS'S
import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    template: '<app-navigation></app-navigation>',
  })
  export class AppComponent {
    title = 'chore-io';
  }