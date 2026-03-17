// 带多个参数的函数
// function functionName(param1,param2,param3,....) {
    
// }
// functionName(param1,param2,param3,....)

// 这个函数将数组作为参数并对数组中的数字求和
function sumArrayValues(arr){
    let sum=0
    for (let i = 0; i<arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}
const numbers=[1,2,3,4,5]
// 调用函数
console.log(sumArrayValues(numbers))