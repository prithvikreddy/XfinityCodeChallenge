import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service"
@Component({
  selector: 'app-sort-by-category',
  templateUrl: './sort-by-category.component.html',
  styleUrls: ['./sort-by-category.component.css']
})
export class SortByCategoryComponent implements OnInit {
  dataArray: Array <any>
  len : any;
  desiredObject: any = {};
  desiredArr: any;
  sort: string;
  constructor(private dataService: DataService) { }

    //generating table data using dataService
  ngOnInit() {
      this.dataService.getJsonData().subscribe((data)=>{
      this.dataArray=data;

      //looping the JSON data and arranging in desired Order
      for(let i in data) {
        if(this.desiredObject[data[i].name]) {
          this.desiredObject[data[i].name][data[i].category] = data[i].amount;
        } else  {
          this.desiredObject[data[i].name] = {};
          this.desiredObject[data[i].name]['name'] = data[i].name;
          this.desiredObject[data[i].name][data[i].category] = data[i].amount;
        }
      }
      //storing Object in array
       this.desiredArr = (<any>Object).values(this.desiredObject);
    })

  }

    //sorting method to arrange displayed data in assending/descending order onClick event occurs in table head
  sorting(sortelement: any) {
        if (this.sort == "sortedBy" + sortelement) {//rev sort
            this.desiredArr.reverse();
            this.sort = "vertsortedBy" + sortelement;
            
        }
        else {//normal sort
          //console.log("ins sorting 2")
            this.desiredArr.sort(function (a, b) { return (a[sortelement] > b[sortelement]) ? 1 : ((b[sortelement] > a[sortelement]) ? -1 : 0); });
            this.sort = "sortedBy" + sortelement;
        }
    }

}
