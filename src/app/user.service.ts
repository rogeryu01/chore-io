import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  userName: String,
  userId: Number
}

const baseUrl = 'http://localhost:4201/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(baseUrl + userId);
  }

  // UNSURE
  // getUserPoints(userId: number): Observable<User> {
  //   return this.http.get<User>(baseUrl + userId);
  // }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(baseUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(baseUrl, user);
  }

    // UNSURE
  updateUserPoints(user: User): Observable<User> {
    return this.http.put<User>(baseUrl, user);
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(baseUrl + user.userId);
  }

}
