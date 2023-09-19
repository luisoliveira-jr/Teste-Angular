import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() userData: User | null = null;
  @Output() onSubmit = new EventEmitter<User>()

  userForm!: FormGroup;
  user!: User;

  constructor(
  ) { }


  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(this.userData ? this.userData.firstName : '', [Validators.required]),
      lastName: new FormControl(this.userData ? this.userData.lastName : '', [Validators.required]),
      gender: new FormControl(this.userData ? this.userData.gender : '', [Validators.required]),
      dateOfBirth: new FormControl(this.userData ? this.userData.dateOfBirth : '', [Validators.required]),
      email: new FormControl(this.userData ? this.userData.email : '', [Validators.required]),
      phone: new FormControl(this.userData ? this.userData.phone : '', [Validators.required]),
      picture: new FormControl(this.userData ? this.userData.picture : '', [Validators.required]),
    })
  }

  get firstName() {
    return this.userForm.get('firstName')!;
  }

  get lastName() {
    return this.userForm.get('lastName')!;
  }

  get gender() {
    return this.userForm.get('gender')!;
  }

  get dateOfBirth() {
    return this.userForm.get('dateOfBirth')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  get phone() {
    return this.userForm.get('phone')!;
  }

  get picture() {
    return this.userForm.get('picture')!;
  }


  submit() {
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);

    this.onSubmit.emit(this.userForm.value);
  }

}
