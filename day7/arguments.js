/* #### 常规函数中的无限数量参数

函数声明提供了一个函数作用域的类似数组的arguments对象。我们在函数中作为参数传递的任何内容都可以从函数内部的arguments对象访问。 */

// 访问arguments对象
function sumAllNums(){
    console.log(arguments)
}

sumAllNums(1,2,3,4)

function sumAllNums2(){
    let sum=0
    for(let i=0; i<arguments.length; i++){
        sum+=arguments[i]
    }
    return sum
}

console.log(sumAllNums2(1,2,3,4))
console.log(sumAllNums2(10,20,13,40,10))