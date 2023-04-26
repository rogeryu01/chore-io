import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { CreateChoreComponent } from './create-chore/create-chore.component';
import { ViewChoresComponent } from './view-chores/view-chores.component';


const routes: Routes = [
  CalendarComponent.Route,
  //ChoreListComponent.Route,
  CreateChoreComponent.Route,
  ViewChoresComponent.Route,
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
