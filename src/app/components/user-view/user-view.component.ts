import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { Response } from 'src/app/interfaces/Response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  allUsers$ = new Observable<User[]>()

  constructor(private userService: UserService) { }

  ngOnInit(): void {}
}
