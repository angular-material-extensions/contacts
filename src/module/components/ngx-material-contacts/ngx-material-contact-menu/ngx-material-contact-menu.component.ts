import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Filter} from '../../../enums';

@Component({
  selector: 'ngx-material-contacts-menu',
  templateUrl: './ngx-material-contact-menu.component.html',
  styleUrls: ['./ngx-material-contact-menu.component.scss']
})
export class NgxMaterialContactMenuComponent implements OnInit {

  @Output()
  onFilterChanged: EventEmitter<Filter> = new EventEmitter<Filter>();

  filters = Filter;
  selectedFilter: Filter;

  constructor() {
  }

  ngOnInit() {
  }

  setFilter(filter: Filter) {
    console.log('on changed filter: ', filter);
    this.selectedFilter = filter;
    this.onFilterChanged.emit(filter);
  }

}
