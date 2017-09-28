import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sort-by-column',
  templateUrl: './sort-by-column.component.html',
  styleUrls: ['./sort-by-column.component.css']
})
export class SortByColumnComponent implements OnInit {
    dataArray: Array<any>;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getJsonData().subscribe(data => {
      this.dataArray = data;
    })
  }

}
