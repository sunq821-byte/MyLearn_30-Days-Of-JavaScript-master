// 声明一个函数名_sumOfOdds_。它接受一个number参数并将该范围内的所有奇数相加
function sumOfOdds(a, b) {
    let sum = 0
    if (a < b) {
        for (let i = a; i <= b; i++) {
            if (i % 2 != 0) {
                sum += i
            }
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            if (i % 2 != 0) {
                sum += i
            }
        }
    } else {
        sum = a
    }
    return sum
}

console.log(sumOfOdds(1, 5))