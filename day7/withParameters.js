// 带一个参数的函数

function functionName(parm1){
    // 代码部分
}
// 在调用时需要提供一个参数
// functionName(parm1)

function areaOfCircle(r){
    let area = Math.PI*r*r
    return area
}

areaOfCircle(10)
console.log(areaOfCircle(10)) // 应该用一个参数调用

function square(number) {
    return number * number
}

console.log(square(10))

