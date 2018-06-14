import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Filter} from '../../../enums';
import {MatSelectionListChange} from '@angular/material';

@Component({
  selector: 'mat-contact-menu',
  templateUrl: './mat-contact-menu.component.html',
  styleUrls: ['./mat-contact-menu.component.scss']
})
export class MatContactMenuComponent implements OnInit {

  @Output()
  onFilterChanged: EventEmitter<Filter> = new EventEmitter<Filter>();

  filters = Filter;
  selectedFilters: Filter[];

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedFiltersChange($event: MatSelectionListChange) {
    console.log('onSelectedFiltersChange', $event);
  }

  onSelectedOptionsChange(values: Filter[]) {
    this.selectedFilters = values;
    console.log('onSelectedOptionsChange', values);
  }

  // setFilter(filter: Filter) {
  //   console.log('on changed filter: ', filter);
  //   this.selectedFilter = filter;
  //   this.onFilterChanged.emit(filter);
  // }

}
