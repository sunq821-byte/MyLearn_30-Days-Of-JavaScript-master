// 带两个参数的函数
// function functionName(parm1,parm2){
//     // 代码放这里
// }
// functionName(parm1,parm2) 在调用时需要提供两个参数
// 没有参数的函数不接受输入，所以让我们创建一个带参数的函数

function sumTwoNumbers(numOne,numTwo){
    let sum = numOne+numTwo
    console.log(sum)
}
sumTwoNumbers(10,20) //  调用函数
// 如果函数不返回，他不会存储数据，所以应该返回
console.log(sumTwoNumbers(10,20))

function printFullName(firstName,lastName){
    return `${firstName} ${lastName}`
}
console.log(printFullName('Aim','Tim'))