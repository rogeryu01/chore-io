import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateChoreComponent } from './create-chore/create-chore.component';
import { HowtoComponent } from './howto/howto.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ViewChoresComponent } from './view-chores/view-chores.component';


const routes: Routes = [
  { path: 'view', component: ViewChoresComponent },
  { path: '', component: CreateChoreComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'howto', component: HowtoComponent },
  { path: 'leaderboard', component: LeaderboardComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }