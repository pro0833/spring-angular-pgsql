import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:8080/api/users";

  constructor(private http:HttpClient) { }

  //get all posts
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  // Delete user by id
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  //create new user
  createUser(newUser:any): Observable<User> {
    return this.http.post<User>(this.apiUrl,newUser)
  }

  // Update user by id
  updateUser(id: number, updatedUser: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, updatedUser);
  }
}
