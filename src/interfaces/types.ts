
export type weekId = {startYear:number; startMonth:number; startDay:number;
                    endYear:number; endMonth:number; endDay:number;} 
export type dayId = {year:number; month:number; day:number;}
export type hourId = {ear:number; month:number; day:number; hour:number;}

export type WeeklyData = {id: weekId; average:number; a:string;}
export type DailyData = {id:dayId; average:number; a:string;}
export type HourlyData = {id:hourId; average:number; a:string;}

export type ChartElementTypes= { 
    labels: any[];
    datasets: [{
        label:string;
        data: number[];
        fill:false
        borderColor : string;
        tension: 0.2
    }]
}