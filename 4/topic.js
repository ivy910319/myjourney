let topic = [
    "國華街->清水堂->漁光島->花園夜市->文章牛肉湯",
    "阿憨鹹粥->頑皮世界->高雄->棧貳庫->Woo Taiwan->Roof Ocean",
    "丹丹漢堡->義大遊樂世界->回家",
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(7, 12);