import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  userName: String,
  userId: Number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllusers(): Observable<User[]> {
    return this.http.get<User[]>('/api/user');
  }

  getuser(userId: number): Observable<User> {
    return this.http.get<User>('/api/user/' + userId);
  }

  createuser(user: User): Observable<User> {
    return this.http.post<User>('/api/user', user);
  }

  updateuser(user: User): Observable<User> {
    return this.http.put<User>('/api/user', user);
  }

  deleteuser(user: User): Observable<User> {
    return this.http.delete<User>('/api/user/' + user.userId);
  }

}
