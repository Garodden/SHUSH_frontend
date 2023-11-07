
export type weekId = {startYear:number; startMonth:number; startDay:number;
                    endYear:number; endMonth:number; endDay:number;} 
export type dayId = {year:number; month:number; day:number;}
export type hourId = {ear:number; month:number; day:number; hour:number;}

export type WeeklyData = {id: weekId; average:number; a:string;}
export type DailyData = {id:dayId; average:number; a:string;}
export type HourlyData = {id:hourId; average:number; a:string;}
export type pointVar = {datasetIndex:number, index:number}
export type ChartElementTypes= { 
    labels: any[];
    datasets: [{
        label:string;
        data: number[];
        fill: {
            target: string,  // Area will be red above the origin
            below: string    // And blue below the origin
          },
        borderColor : any;
        backgroundColor: any;
        pointBackgroundColor:any;
        tension: 0.2
    }]
}
//backGroundColor:`rgb(30, 33, 53)`,
//backGroundColor2:`rgb(94, 96, 255)`,

// mainContainerColor:`rgb(45, 51, 88, 1)`,
// calenderContainerColor: `rgb(36, 42, 83)`,
// calenderPointColor:`rgb(66, 118, 230)`,
// calenderTextColor:`white`,

// chartBaseColor:`rgb(36, 42, 83)`,
// chartBoarderColor1:`rgb(94, 96, 255)`,
// chartBoarderColor2:`#FFC609`,
// chartBoarderColor3:`#FF09BD`,
// chartFillColor1:`rgba(94, 96, 255, 0.2)`,
// chartFillColor2:`rgba(255, 198, 9, 0.2)`,
// chartFillColor3:`rgba(255, 9, 189)`,
// chartContainerColor:`rgb(212, 69, 255)`,

// textColor:`white`,
// textBoxColor:`rgb(36, 42, 83)`,
// containerBoxColor:`rgb(202, 202, 202)`,
// TitleTextColor:`white`,
export const ColorPalettes={
    backGroundColor:`rgb(30, 33, 53)`,
    backGroundColor2:`rgb(94, 96, 255)`,
    mainContainerColor:`rgb(45, 51, 88, 1)`,
    calenderContainerColor: `rgb(36, 42, 83)`,
    calenderPointColor:`rgb(66, 118, 230)`,
    calenderTextColor:`white`,

    chartBaseColor:`rgb(36, 42, 83)`,
    chartBoarderColor1:`rgb(94, 96, 255)`,
    chartBoarderColor2:`#FFC609`,
    chartBoarderColor3:`#FF09BD`,
    chartFillColor1:`rgba(94, 96, 255, 0.2)`,
    chartFillColor2:`rgba(255, 198, 9, 0.2)`,
    chartFillColor3:`rgba(255, 9, 189)`,
    chartContainerColor:`rgb(212, 69, 255)`,

    textColor:`white`,
    textBoxColor:`rgb(36, 42, 83)`,
    containerBoxColor:`rgb(202, 202, 202)`,
    TitleTextColor:`white`,
}