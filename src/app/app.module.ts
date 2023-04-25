import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppNavComponent } from './navigation/navigation.component';
import { ChoreListComponent } from './chore-list/chore-list.component';
import { AppRoutingModule } from './app-routing.module';
//import { AppNavComponent} from './app-nav/app-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    CalendarComponent,
    //NavigationComponent,
    ChoreListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
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