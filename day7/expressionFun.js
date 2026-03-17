// 表达式函数是匿名函数。在我们创建一个没有名称的函数后，我们将其分配给一个变量。要从函数返回值，我们应该调用变量
const square = function(n){
    return n*n
}
console.log(square(2))