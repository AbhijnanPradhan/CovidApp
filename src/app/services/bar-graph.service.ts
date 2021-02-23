import { Injectable } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { chartDataObj } from '../interfaces/chartDataObj-interface';

@Injectable({
  providedIn: 'root'
})
export class BarGraphService {
  private barChartOptions: ChartOptions = {
    responsive: true,
  };
  private barChartLabels: Label[] = [];
  private barChartType: ChartType = 'bar';
  private barChartLegend = true;
  private barChartPlugins = [];
  private barChartData: ChartDataSets[] = [];
  private dataObj = new chartDataObj;


  constructor() { }
  genGraph(labels:string[],fData:number[],fLabel:string='',chartType : ChartType = 'bar'): chartDataObj{
    this.barChartData = [
      {data: fData, label:fLabel}
    ];
    this.barChartLabels = labels;
    this.barChartType = chartType;
    this.datasetMaker();
    return this.dataObj;
  }
  datasetMaker(){
    this.dataObj.chartData=this.barChartData;
    this.dataObj.chartLabels = this.barChartLabels;
    this.dataObj.chartType = this.barChartType;
    this.dataObj.chartOptions = this.barChartOptions;
    this.dataObj.chartLegend = this.barChartLegend;
    this.dataObj.chartPlugins = this.barChartPlugins;
  }
}
