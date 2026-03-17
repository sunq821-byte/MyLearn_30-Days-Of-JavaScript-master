// 自调用函数是无需调用即可返回值的匿名函数
(function(n){
    console.log(n*n)
})(2)

let squareNum = (function(n){
    return n*n
})(10)

console.log(squareNum)