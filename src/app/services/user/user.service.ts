import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';
import { Response } from 'src/app/interfaces/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}users/`;

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: string) {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<User>(url);
  }

  createUser(newUser: User) {
    return this.http.post<User>(this.apiUrl, newUser);
  }

  updateUser(user: User) {
    const url = `${this.apiUrl}/${user.id}`
    return this.http.put<User>(url, user);
  }

  deleteUser(id: string) {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<void>(url);
  }


}