// 箭头函数是编写函数的另一种方式，但是函数声明和箭头函数有一些细微的差异。
// 箭头函数使用箭头而不是关键字*function*来声明函数。让我们看看函数声明和箭头函数。
function square(n){
    return n*n
}
console.log(square(2))

const square2=n=>{
    return n*n
}

console.log(square2(2))

// 如果代码块中只有一行，可以如下编写，显式返回
// const square = n => n * n  // -> 4


const changeToUpperCase=arr=>{
    const newArr=[]
    for(const element of arr){
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

const printFullName = (firstName,lastName)=>{
    return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))