import { Component, OnInit, OnChanges, AfterViewInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-dynamic-table',
  host: {'(window:keydown)': 'hotkeys($event)'},
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() data: any;
  @Input() visibleColumns: Array<string>;

  @Output() dataSourceChange: EventEmitter<any> = new EventEmitter();
  @Output() dataClicked: EventEmitter<any> = new EventEmitter();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dataSource = new MatTableDataSource([]);
  columns: any;
  isFocused: boolean;
  value;
  currentIndex: number;
  constructor() { }

  hotkeys(event) {
    if (event.ctrlKey && event.keyCode == 114 ) { // F3
      if (this.currentIndex !== 999) {
        this.currentIndex = 999;
      } else {
        this.currentIndex = 0;
      }
    }
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.currentIndex = 0;
  }

  ngAfterViewInit() {

  }
  ngOnChanges() {
    this.setData(this.data);
  }

  private setData(data) {
    if (Array.isArray(data)) {
      // console.log(this.sort);
      this.dataSource = new MatTableDataSource(data);
      this.dataSourceChange.emit(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.dataSource);

    }
    if (Array.isArray(this.visibleColumns)) {
      this.columns = this.visibleColumns;
    } else {
      if (Array.isArray(data)) {
        const obj = data[0];
        if (obj !== undefined && obj !== null) {
          this.columns = Object.keys(obj);
        }
      }
    }
  }

  filterData(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  clearFilter() {
    this.value = '';
    this.filterData(this.value);
  }

  rowClicked(data) {
    this.dataClicked.emit(data);
  }
  focused(index) {
    this.currentIndex = index;
    console.log(this.currentIndex);
  }
}
