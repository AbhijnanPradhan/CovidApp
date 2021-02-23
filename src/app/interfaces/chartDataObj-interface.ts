import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export class chartDataObj{
    chartOptions: ChartOptions;
    chartLabels: Label[];
    chartType: ChartType;
    chartLegend: boolean;
    chartPlugins: Array<any>;
    
    chartData: ChartDataSets[];
    constructor(){
        this.chartOptions = {
            responsive: true,
          };
        this.chartLabels = [];
        this.chartType = 'bar';
        this.chartLegend = false;
        this.chartPlugins = [];
        this.chartData = [];  
    }
}