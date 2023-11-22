
export type weekId = {startYear:number; startMonth:number; startDay:number;
                    endYear:number; endMonth:number; endDay:number;} 
export type dayId = {year:number; month:number; day:number;}
export type hourId = {ear:number; month:number; day:number; hour:number;}
export type ChartComponentDayProps ={
    CalenderClickedDate: string;
    curPosition: string; // 또는 올바른 타입으로 변경
  }
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
// export const ColorPalettes={
//     backGroundColor:`rgb(30, 33, 53)`,
//     backGroundColor2:`rgb(94, 96, 255)`,
//     mainContainerColor:`rgb(45, 51, 88, 1)`,
//     calenderContainerColor: `rgb(36, 42, 83)`,
//     calenderPointColor:`rgb(66, 118, 230)`,
//     calenderTextColor:`white`,

//     chartBaseColor:`rgb(36, 42, 83)`,
//     chartBoarderColor1:`rgb(94, 96, 255)`,
//     chartBoarderColor2:`#FFC609`,
//     chartBoarderColor3:`#FF09BD`,
//     chartFillColor1:`rgba(94, 96, 255, 0.2)`,
//     chartFillColor2:`rgba(255, 198, 9, 0.2)`,
//     chartFillColor3:`rgba(255, 9, 189)`,
//     chartContainerColor:`rgb(212, 69, 255)`,

//     textColor:`white`,
//     textBoxColor:`rgb(36, 42, 83)`,
//     containerBoxColor:`rgb(202, 202, 202)`,
//     TitleTextColor:`white`,
// }
export const ColorPalettes={
    backGroundColor:`rgb(1, 18, 26)`,
    backGroundColor2:`rgb(240, 248, 255)`,
    mainContainerColor:`rgb(207, 226, 243)`,
    calenderContainerColor: `rgb(233, 239, 247)`,
    calenderPointColor:`rgb(102, 169, 207)`,
    calenderTextColor:`rgb(35, 31, 32)`,

    chartBaseColor:`rgb(233, 239, 247)`,
    chartBoarderColor1:`rgb(244, 114, 101)`,
    chartBoarderColor2:`rgb(102, 169, 207)`,
    chartBoarderColor3:`#FF09BD`,
    chartFillColor1:`rgb(244, 114, 101)`,
    chartFillColor2:`rgb(102, 169, 207)`,
    chartFillColor3:`rgba(255, 9, 189)`,
    chartContainerColor:`rgb(212, 69, 255)`,

    textColor:`rgb(35, 31, 32)`,
    textBoxColor:`rgb(233, 239, 247)`,
    containerBoxColor:`rgb(217, 217, 217)`,
    TitleTextColor:`white`,
}