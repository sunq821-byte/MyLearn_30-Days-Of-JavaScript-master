// 访问arguments
const sumAllNums=(...args)=>{
    // console.log(arguments) // 在箭头函数中找不到arguments对象
    // 相反，我们使用一个参数后跟扩展运算符(...)
    console.log(args)
}

sumAllNums(1,2,3,4)

// 函数说明
const sumAllNums2=(...args)=>{
    let sum=0
    for(const element of args){
        sum+=element
    }
    return sum
}
console.log(sumAllNums2(1, 2, 3, 4))
console.log(sumAllNums2(10, 20, 13, 40, 10)) 