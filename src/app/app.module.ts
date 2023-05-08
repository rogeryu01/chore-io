import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppNavComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateChoreComponent } from './create-chore/create-chore.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewChoresComponent } from './view-chores/view-chores.component';
import { HowtoComponent } from './howto/howto.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
//import { AppNavComponent} from './app-nav/app-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    CalendarComponent,
    //NavigationComponent,
    CreateChoreComponent,
    ViewChoresComponent,
    HowtoComponent,
    LeaderboardComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }