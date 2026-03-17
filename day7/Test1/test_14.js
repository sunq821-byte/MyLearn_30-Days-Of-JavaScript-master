// 编写一个名为_checkSeason_的函数，它接受一个月份参数并返回季节：秋季、冬季、春季或夏季
function checkSeason(m){
    let season = ''
    switch(m){
        case 3:
        case 4:
        case 5:
            season = '春季'
            break
        case 6:
        case 7:
        case 8:
            season = '夏季'
            break
        case 9:
        case 10:
        case 11:
            season = '秋季'
            break
        case 12:
        case 1:
        case 2:
            season = '冬季'
            break
        default:
            season = '输入错误'
    }
    return season
}
console.log(checkSeason(3))