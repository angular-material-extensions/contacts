import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {Contact} from '../ngx-material-contacts.component';

const EMAIL_REGEX = new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
  '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
  '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
  '[a-zA-Z]{2,}))$'].join(''));

const PHONE_NUMBER_REGEX = new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);

@Component({
  selector: 'ngx-material-contacts-new-user',
  templateUrl: './ngx-material-contacts-new-user.component.html',
  styleUrls: ['./ngx-material-contacts-new-user.component.scss']
})
export class NgxMaterialContactsNewUserComponent implements OnInit {

  newContactForm: FormGroup;

  nameFormControl: AbstractControl;
  emailFormControl: AbstractControl;
  phoneNumberFormControl: AbstractControl;

  phoneNumber: string;

  constructor(public dialogRef: MatDialogRef<NgxMaterialContactsNewUserComponent>) {
  }

  ngOnInit() {
    this.newContactForm = new FormGroup({
      name: this.nameFormControl = new FormControl('',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ]),
      email: this.emailFormControl = new FormControl('',
        [
          Validators.required,
          Validators.pattern(EMAIL_REGEX)
        ]),

      phoneNumber: this.phoneNumberFormControl = new FormControl('',
        [Validators.pattern(PHONE_NUMBER_REGEX)])
    });
  }

  save() {
    const contact: Contact = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      phoneNumber: this.phoneNumber
    };
    this.dialogRef.close(contact);
  }
}
