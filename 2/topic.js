let topic = [
    "買食材->山的那一邊->煮飯->小酌",
    "煮飯->體驗山中生活",
    "回家",
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(1, 25);