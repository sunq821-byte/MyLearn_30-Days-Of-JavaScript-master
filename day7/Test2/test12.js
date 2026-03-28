// 声明一个函数名_sumOfEven_。它接受一个number参数并将该范围内的所有偶数相加
function sumOfEven(a, b) {
    let sum = 0
    if (a < b) {
        for (let i = a; i <= b; i++) {
            if (i % 2 == 0) {
                sum += i
            }
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            if (i % 2 == 0) {
                sum += i
            }
        }
    } else {
        sum = a
    }
    return sum
}

console.log(sumOfEven(1, 5))