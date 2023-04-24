import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    /*this.http.get('/api/chores').subscribe((data: any[]) => {
      console.log(data);
    });*/
  }

}

