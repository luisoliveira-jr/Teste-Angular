import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  allUsers$ = new Observable<User[]>()

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.allUsers$ = this.userService.getUsers()

  }

  update() {
    this.userService.getUsers();
  }

  delete(id: string) {
    this.userService.deleteUser(id)
      .subscribe(() => this.userService.getUsers());

    window.location.reload();
  }

}

