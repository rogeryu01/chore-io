import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpResponse, HttpRequest, HttpParamsOptions } from '@angular/common/http';
//import { choreColumns } from 'src/models/chore.model';


export interface Chore {
  name: string;
  createdBy: string | null;
  assignedTo: string;
  completionStatus: string;
  accepted: boolean;
  choreId: number | null;
  assignedDate: Date;
  dueDate: Date;
  repeatFor: string;
  points: number;
}

const baseUrl = 'http://localhost:4201/api/chore';

@Injectable({
  providedIn: 'root'
})
export class ChoreService {

  constructor(private http: HttpClient) { }

  getAllChores(): Observable<Chore[]> {
    return this.http.get<Chore[]>(baseUrl);
  }

  getChoresByUser(): Observable<Chore[]> {
    return this.http.get<Chore[]>(baseUrl);
  }

  createChore(chore: Chore): Observable<Chore> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post<Chore>(baseUrl, chore);
  }

  updateChore(chore: Chore): Observable<Chore> {
    return this.http.put<Chore>(baseUrl, chore);
  }

  deleteChore(chore: Chore): Observable<Chore> {
    return this.http.delete<Chore>(baseUrl + chore.choreId);
  }


}
