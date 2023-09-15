import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';
import { Response } from 'src/app/interfaces/Response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/* import { environment } from 'src/environments/environment'; */


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user!: User;
  btnText: string = 'Atualizar';
  
  ngOnInit(): void {}
}
