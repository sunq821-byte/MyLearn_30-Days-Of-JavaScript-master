// 随机数
let randomNum = Math.random()         // 生成0到0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // 这给出：最小值0和最大值10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen) //floor：向下舍入
console.log(randomNumRoundToFloor)    // 这给出0到10之间的值