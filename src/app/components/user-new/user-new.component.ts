import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})

export class UserNewComponent implements OnInit {
  btnText: string = 'Criar';

  allUsers$ = new Observable<User[]>();

  id = '';
  title = '';
  firstName = '';
  lastName = '';
  gender = '';
  email = '';
  dateOfBirth = '';
  registerDate = '';
  phone = '';
  picture = '';
  /*  location = {
     street: '',
     city: '',
     state: '',
     country: '',
     timezone: '',
   } */

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  update(){
    this.userService.getUsers();
  }

  buttonClick() {
    if (!this.firstName || !this.lastName)
      return;

    if (this.id) {
      this.update();
      return;
    }

    this.userService.createUser(
      {
        title: this.title,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        email: this.email,
        dateOfBirth: this.dateOfBirth,
        phone: this.phone,
        picture: this.picture,
        /* location: {
          street: this.location.street,
          city: this.location.city,
          state: this.location.state,
          country: this.location.country,
          timezone: this.location.timezone,
        } */
      }).subscribe(() => this.userService.getUsers());

    /* this.userService.add(`Usuário criado com sucesso!`) */
    this.router.navigate([`/`]);

  }
}
