let topic = [
    "海的那一邊(海龜雞蛋糕), 環島, 彎弓洞, 阿剛炭烤, 蔓蔓stay, 夜遊",
    "朝日溫泉, 帆船鼻大草原, 牛頭山, 緩島民宿",
    "綠島監獄, 綠島監獄冰",
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(6, 27);