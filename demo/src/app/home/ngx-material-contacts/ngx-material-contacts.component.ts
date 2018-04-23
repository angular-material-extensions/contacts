import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

export interface Contact {
  id: string;
  name: string;
  email: string;
  photoURL: string;
  phoneNumber: string;
}

/**
 * @title Table with selection
 */
@Component({
  selector: 'ngx-material-contacts',
  styleUrls: ['ngx-material-contacts.component.scss'],
  templateUrl: 'ngx-material-contacts.component.html',
})
export class NgxMaterialContactsComponent implements OnInit {

  @ViewChild(MatTable) table;

  @Input()
  contacts: Contact[];

  @Input()
  title = 'Contacts';

  @Input()
  readonly: boolean;

  @Output()
  onContactRemoved: EventEmitter<Contact> = new EventEmitter<Contact>();

  contactsDataSource: MatTableDataSource<Contact>;
  contactsDisplayedColumns = ['name', 'email', 'phoneNumber'];
  selection = new SelectionModel<Contact>(true, []);


  constructor() {

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


