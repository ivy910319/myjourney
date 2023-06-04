let topic = [
    "台東火車站->伯朗大道->加路蘭海岸->海人上菜->民宿->星星部落",
    "明奎早餐->台東火車站->花蓮火車站->2D民宿->東大門夜市",
    "七星潭日出->回家",
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2, 18);