import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Contact, IContactDialogData} from '../../../interfaces';
import {Methods} from '../../../enums';

const EMAIL_REGEX = new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
  '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
  '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
  '[a-zA-Z]{2,}))$'].join(''));

const PHONE_NUMBER_REGEX = new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);

@Component({
  selector: 'mat-contact-dialog',
  templateUrl: './mat-contact-dialog.component.html',
  styleUrls: ['./mat-contact-dialog.component.scss']
})
export class MatContactDialogComponent implements OnInit {

  newContactForm: FormGroup;

  nameFormControl: AbstractControl;
  emailFormControl: AbstractControl;
  phoneNumberFormControl: AbstractControl;

  phoneNumber: string;

  methods = Methods;

  constructor(public dialogRef: MatDialogRef<MatContactDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IContactDialogData) {
    console.log('data = ', this.data);
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
      phoneNumber: this.phoneNumber,
      metadata: {
        created_at: new Date(),
        updated_at: new Date()
      }
    };
    const result: IContactDialogData = {
      method: Methods.POST,
      contact: contact
    };
    this.dialogRef.close(result);
  }

  delete() {
    const result: IContactDialogData = {
      method: Methods.DELETE,
      contact: {name: 'asd', email: 'ycs'}
    };
    this.dialogRef.close(result);
  }
}
