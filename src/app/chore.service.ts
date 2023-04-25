import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Chore {
  name: string;
  createdBy: string;
  assignedTo: string;
  completionStatus: string;
  accepted: boolean;
  choreId: number;
  assignedDate: Date;
  dueDate: Date;
  repeatFor: string;
  points: number;
}


@Injectable({
  providedIn: 'root'
})
export class ChoreService {

  constructor(private http: HttpClient) { }

  getAllChores(): Observable<Chore[]> {
    return this.http.get<Chore[]>('/api/chore');
  }

  getChore(choreId: number): Observable<Chore> {
    return this.http.get<Chore>('/api/chore/' + choreId);
  }

  createChore(chore: Chore): Observable<Chore> {
    return this.http.post<Chore>('/api/chore', chore);
  }

  updateChore(chore: Chore): Observable<Chore> {
    return this.http.put<Chore>('/api/chore', chore);
  }

  deleteChore(chore: Chore): Observable<Chore> {
    return this.http.delete<Chore>('/api/chore/' + chore.choreId);
  }


}
