import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})

export class UserNewComponent implements OnInit {
  allUsers$: Array<any> = [];
  user$: any;
  frm: any;

  baseApiUrl = environment.baseApiUrl

  constructor(
    private userService: UserService,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$ = {};

  }

  create(frm: FormGroup) {
    this.userService.createUser(this.user$).subscribe(newUser => {
      this.allUsers$.push(newUser);

      frm.reset();
    })
      
  }

}
