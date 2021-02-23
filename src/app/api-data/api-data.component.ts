import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';
import{ApiDataInterface,Region} from '../interfaces/api-data-interface';
import{faSort} from '@fortawesome/free-solid-svg-icons';

import { chartDataObj } from '../interfaces/chartDataObj-interface';
import { BarGraphService } from '../services/bar-graph.service';


@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  faSort = faSort;
  
  apiData: ApiDataInterface = new ApiDataInterface();
  apiRegionData : Array<Region> = [];
  updateDate : Date = new Date();

  recoveryRate : String = '';
  deathRate : String = '';

  

  constructor(private apiService:ApiServiceService) { 
}

  ngOnInit(): void {
    this.apiService.apiCaller().subscribe((data)=>{
      // this.apiData = data;
      console.log(data);
      this.apiData = data;
      this.updateDate = this.apiData.lastUpdatedAtApify;
      this.apiRegionData = this.apiData.regionData;
      this.recoveryRate = ((this.apiData.recovered/this.apiData.totalCases)*100).toFixed(2);
      this.deathRate = ((this.apiData.deaths/this.apiData.totalCases)*100).toFixed(2);
      this.barGraphGenerator('No. Of Covid Cases');
    });
  }

  region: any;
  search(){
    if(this.region == ''){
      this.ngOnInit();
    }else{
      this.apiRegionData = this.apiRegionData.filter(res =>{
        return res.region.toLocaleLowerCase().match(this.region.toLocaleLowerCase());
      });
    }
  }

  key: String ='region';
  reverse:boolean = false;
  sort(key: string){
    this.key = key ;
    this.reverse = !this.reverse;
  }

  pgNo:number = 1;

  barGraphService= new BarGraphService();
  radarGraphService = new BarGraphService();

  barChartData : chartDataObj = new chartDataObj();
  radarChartData : chartDataObj = new chartDataObj();
  barGraphGenerator(fLabel:string=''){
    this.dataFiller();
    this.barChartData = this.barGraphService.genGraph(this.labels,this.data,fLabel,'bar');
    this.radarChartData = this.radarGraphService.genGraph(this.labels,this.data,fLabel,'radar');
  }

  labels: Array<string> = [];
  data: Array<number> = [];
  dataFiller(){
    this.apiRegionData.forEach(item => {
      this.labels.push(item.region);
      this.data.push(item.totalInfected);
    });
  }
}
