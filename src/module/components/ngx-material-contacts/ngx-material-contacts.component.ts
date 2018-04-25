import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef, MatTable, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {NgxMaterialContactsNewUserComponent} from './ngx-material-contacts-new-user/ngx-material-contacts-new-user.component';

export interface Contact {
  id?: string;
  name: string;
  email: string;
  photoURL?: string;
  phoneNumber?: string;
}

/**
 * @title Table with selection
 */
@Component({
  selector: 'ngx-material-contacts',
  styleUrls: ['ngx-material-contacts.component.scss'],
  templateUrl: 'ngx-material-contacts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxMaterialContactsComponent implements OnInit, OnDestroy {

  @ViewChild(MatTable) table: MatTable<any>;

  @Input()
  contacts: Contact[];

  @Input()
  title = 'Contacts';

  @Input()
  readonly: boolean;

  @Output()
  onContactAdded: EventEmitter<Contact> = new EventEmitter<Contact>();

  @Output()
  onContactRemoved: EventEmitter<Contact> = new EventEmitter<Contact>();

  contactsDataSource: MatTableDataSource<Contact>;
  contactsDisplayedColumns = ['name', 'email', 'phoneNumber'];
  selection = new SelectionModel<Contact>(true, []);
  dialogRef: MatDialogRef<NgxMaterialContactsNewUserComponent> | null;
  dialogAfterCloseSubscription: any;


  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.contactsDataSource = new MatTableDataSource<Contact>(this.contacts);
    console.log('readonly', this.readonly);
    if (!this.readonly) {
      this.contactsDisplayedColumns.splice(0, 0, 'select');
      this.contactsDisplayedColumns.push('more');
      console.log('data : ', this.contactsDataSource.data);
    }
  }

  ngOnDestroy(): void {
    if (this.dialogAfterCloseSubscription) {
      this.dialogAfterCloseSubscription.unsubscribe();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.contactsDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.contactsDataSource.data.forEach(row => this.selection.select(row));
  }

  select(row: any) {
    if (!this.readonly) {
      this.selection.toggle(row);
    }
  }

  openAddDialogContainer() {
    this.dialogRef = this.dialog.open(NgxMaterialContactsNewUserComponent, {
      panelClass: 'new-contact-dialog'
    });
    this.dialogAfterCloseSubscription = this.dialogRef
      .afterClosed()
      .subscribe((result: Contact) => {
        console.log('contact added -> ', result);
        if (result) {
          this.contactsDataSource.data.splice(0, 0, result);
          this.onContactAdded.emit(result);
          this.table.renderRows();
        }
      });
  }

  remove(contact: Contact) {
    console.log('contact -> ', contact);
    console.log('data.length before: ', this.contactsDataSource.data.length);
    const index = this.contactsDataSource.data.indexOf(contact);
    console.log('contactToRemove = ', index);
    if (index > -1) {
      this.contactsDataSource.data.splice(index, 1);
      console.log('data.length after: ', this.contactsDataSource.data.length);
      this.selection.clear();
      this.table.renderRows();
      this.onContactRemoved.emit(contact);
    }
  }

  removeSelected() {
    const selectedContacts = this.selection.selected;
    selectedContacts.forEach((contact) => {
      this.remove(contact);
    });
  }

}


