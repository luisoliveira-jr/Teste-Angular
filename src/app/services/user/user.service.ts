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
 
  constructor(private http: HttpClient) { }

  getUsers() {
    const url = `${this.baseApiUrl}user?page=1&limit=10000000`;
    return this.http.get<User[]>(url);
  }

  getUser(id: string) {
    const url = `${this.baseApiUrl}user/${id}`
    return this.http.get<User>(url);
  }

  createUser(user: any) {
    const url = `${this.baseApiUrl}user/create`
    return this.http.post<FormData>(url, user);
  }

  updateUser(id: string) {
    const url = `${this.baseApiUrl}user/${id}`
    return this.http.put<User>(url, id);
  }

  deleteUser(id: string) {
    const url = `${this.baseApiUrl}user/${id}`
    return this.http.delete<User>(url);
  }


}