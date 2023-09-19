import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  user?: User;
  
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get("id")

    this.userService
      .getUser(id!)
      .subscribe((user) => (this.user = user));
  }

  
  
}
