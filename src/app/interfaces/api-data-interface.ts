export class ApiDataInterface{
    public activeCases: number;
    public activeCasesNew: number;
    public recovered: number;
    public deaths: number;
    public deathsNew: number;
    public previousDayTests: number;
    public totalCases: number;
    public sourceUrl:string;
    public lastUpdatedAtApify:Date;
    public regionData: Array<Region>;
    
    constructor(){
        this.activeCases = 0;
        this.activeCasesNew = 0;
        this.recovered = 0;
        this.deaths = 0;
        this.deathsNew = 0;
        this.previousDayTests = 0;
        this.totalCases = 0;
        this.sourceUrl='';
        this.lastUpdatedAtApify = new Date('2015-03-04T00:00:00.000Z');
        this.regionData = [];
    }
}
export class Region{
    public region: string;
    public totalInfected: number;
    public newInfected: number;
    public recovered: number;
    public newRecovered: number;
    public deceased: number;
    public newDeceased: number;

    constructor(){
        this.region='';
        this.totalInfected = 0;
        this.newInfected = 0;
        this.recovered = 0;
        this.newRecovered = 0;
        this.deceased = 0;
        this.newDeceased = 0;
    }

}