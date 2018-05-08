import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MatDialog, MatDialogRef, MatTable, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {NgxMaterialContactDetailsComponent} from './ngx-material-contact-details/ngx-material-contact-details.component';
import {Contact, IContactDialogResult} from '../../interfaces';
import {Filter, Methods} from '../../enums';

/**
 * @title Table with selection
 */
@Component({
  selector: 'ngx-material-contacts',
  styleUrls: ['ngx-material-contacts.component.scss'],
  templateUrl: 'ngx-material-contacts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
})
export class NgxMaterialContactsComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild(MatTable) table: MatTable<any>;

  @Input()
  contacts: Contact[];

  @Input()
  title = 'Contacts';

  @Input()
  isLoading: boolean;

  @Input()
  readonly: boolean;

  @Output()
  onContactAdded: EventEmitter<Contact> = new EventEmitter<Contact>();

  @Output()
  onContactRemoved: EventEmitter<Contact> = new EventEmitter<Contact>();

  @Output()
  onAddingNewContactCanceled: EventEmitter<void> = new EventEmitter<void>();

  filter: Filter;
  contactsDataSource: MatTableDataSource<Contact>;
  contactsDisplayedColumns = ['name', 'email', 'phoneNumber'];
  selection = new SelectionModel<Contact>(true, []);
  dialogRef: MatDialogRef<NgxMaterialContactDetailsComponent> | null;
  dialogAfterCloseSubscription: any;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log('ConfigurationHelper ngOnInit');
    this.contactsDataSource = new MatTableDataSource<Contact>(this.contacts);
    console.log('readonly', this.readonly);
    if (!this.readonly) {
      this.contactsDisplayedColumns.splice(0, 0, 'select');
      this.contactsDisplayedColumns.push('more');
      console.log('data : ', this.contactsDataSource.data);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes: ', changes);
    if (!changes.contacts.isFirstChange()) {
      this.table.renderRows();
      console.log('yoww rendering !!');
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
    this.dialogRef = this.dialog.open(NgxMaterialContactDetailsComponent, {
      panelClass: 'new-contact-dialog'
    });
    this.dialogAfterCloseSubscription = this.dialogRef
      .afterClosed()
      .subscribe((result: IContactDialogResult) => {
        if (result) {
          const method: Methods = result.method;
          const contact: Contact = result.contact;

          switch (method) {
            case Methods.POST:
              console.log('on post');
              console.log('contact added -> ', result);
              this.add(contact);
              break;
            case Methods.DELETE:
              console.log('on delete');
              this.remove(contact);
              break;
          }

        } else {
          this.onAddingNewContactCanceled.emit();
        }
      });
  }

  add(contact: Contact) {
    this.contactsDataSource.data.splice(0, 0, contact);
    this.onContactAdded.emit(contact);
    this.table.renderRows();
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


