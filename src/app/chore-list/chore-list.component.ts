import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent implements OnInit {

  public static Route = {
    path: '',
    component: ChoreListComponent
  }

    /**
   * Constructor the the  component
   * @param formBuilder - Builder object to use for creating the create form
   */

  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*this.http.get('/api/chores').subscribe((data: any[]) => {
      console.log(data);
    });*/
  }

  ngOnSubmit() {
    // this.http.post('/api/chores', {
    //   name: 'test',
    //   description: 'test'
    // }).subscribe((data: any[]) => {
    //   console.log(data);
    // });
  }

}

