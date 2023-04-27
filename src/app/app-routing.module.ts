import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateChoreComponent } from './create-chore/create-chore.component';
import { ViewChoresComponent } from './view-chores/view-chores.component';


const routes: Routes = [
  { path: 'view', component: ViewChoresComponent },
  { path: '', component: CreateChoreComponent },
  { path: 'calendar', component: CalendarComponent },
];


@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }