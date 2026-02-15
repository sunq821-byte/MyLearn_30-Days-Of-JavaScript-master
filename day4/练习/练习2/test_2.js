let month = prompt('请录入月份：')
let season

switch (month) {
    case '九月份':
    case '十月份':
    case '十一月份':
        season = '秋季'
        break
    case '十二月份':
    case '一月份':
    case '二月份':
        season = '冬季'
        break
    case '三月份':
    case '四月份':
    case '五月份':
        season = '春季'
        break
    case '六月份':
    case '七月份':
    case '八月份':
        season = '夏季'
        break
    default:
        season = '输入的月份无效'
        break
}

console.log(season)


