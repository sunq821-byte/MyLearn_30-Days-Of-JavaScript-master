// 声明一个函数名_sumOfNumbers_。它接受一个number参数并将该范围内的所有数字相加
function sumOfNumbers(a, b) {
    let sum = 0
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i
        }
    } else {
        sum = a
    }
    return sum
}

console.log(sumOfNumbers(1, 1))