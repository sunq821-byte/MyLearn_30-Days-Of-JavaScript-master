let month_2 = parseInt(prompt('输入月份（1~12）：'))
let day_2 = 0

switch(month_2){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day_2 = 31
        break

    case 4:
    case 6:
    case 9:
    case 11:
        day_2 = 30
        break

       case 2:
            // 判断是否为闰年
            let year_2 = parseInt(prompt('请输入年份：'), 10);
            if ((year_2 % 4 === 0 && year_2 % 100 !== 0) || (year_2 % 400 === 0)) {
                day_2 = 29;
            } else {
                day_2 = 28;
            }
            break;
}

console.log(`${month_2}月有${day_2}天`)