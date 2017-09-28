import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sort-by-column',
  templateUrl: './sort-by-column.component.html',
  styleUrls: ['./sort-by-column.component.css']
})
export class SortByColumnComponent implements OnInit {
    dataArray: Array<any>;
    sort: string;
  constructor(private dataService: DataService) { }
  //generating table data using dataService
  ngOnInit() {
    this.dataService.getJsonData().subscribe(data => {
      this.dataArray = data;
    })
  }
  //sorting method to arrange displayed data in assending/descending order onClick event occurs in table head
  sorting(sortelement: any) {
        if (this.sort == "sortedBy" + sortelement) {//rev sort
            this.dataArray.reverse();
            this.sort = "vertsortedBy" + sortelement;
            
        }
        else {//normal sort
            this.dataArray.sort(function (a, b) { return (a[sortelement] > b[sortelement]) ? 1 : ((b[sortelement] > a[sortelement]) ? -1 : 0); });
            this.sort = "sortedBy" + sortelement;
        }
    }

}
