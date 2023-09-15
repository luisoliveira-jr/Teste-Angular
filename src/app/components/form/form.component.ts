import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() btnText!: string;
  @Input() userData: User | null = null;
  @Output() onSubmit = new EventEmitter<User>()

  userForm!: FormGroup;
  user!: User;

  constructor(
  ) { }


  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(this.userData ? this.userData.id : ''),
      title: new FormControl(this.userData ? this.userData.title : '', [Validators.required]),
      firstName: new FormControl(this.userData ? this.userData.firstName : '', [Validators.required]),
      lastName: new FormControl(this.userData ? this.userData.lastName : '', [Validators.required]),
      gender: new FormControl(this.userData ? this.userData.gender : '', [Validators.required]),
      dateOfBirth: new FormControl(this.userData ? this.userData.dateOfBirth : '', [Validators.required]),
      registerDate: new FormControl(this.userData ? this.userData.registerDate : '', [Validators.required]),
      phone: new FormControl(this.userData ? this.userData.phone : '', [Validators.required]),
      /* picture: new FormControl(this.userData ? this.userData.picture : '', [Validators.required]), */
      /* location: new FormControl(this.userData ? this.userData.location : '', [Validators.required]), */
    })
  }

  get id() {
    return this.userForm.get('id')!;
  }

  get title() {
    return this.userForm.get('title')!;
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

  get registerDate() {
    return this.userForm.get('registerDate')!;
  }

  get phone() {
    return this.userForm.get('phone')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.userForm.patchValue({ image: file });
  }

  /* get location() {
    return this.userForm.get('location')!;
  } */

  submit() {
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);

    this.onSubmit.emit(this.userForm.value);
  }

}
