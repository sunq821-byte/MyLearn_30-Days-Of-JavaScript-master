// 有时我们向参数传递默认值，当我们调用函数时，如果不传递参数，将使用默认值。函数声明和箭头函数都可以有一个或多个默认值。
// 语法
// 声明函数
//function functionName(param = value) {
  //代码
//}
// 调用函数
// functionName()
// functionName(arg)

function greetings(name='Peter'){
    let message=`${name},欢迎来到30天JavaScript挑战!`
    return message
}
console.log(greetings())
console.log(greetings('Tim'))


function generateFullName(firstName='Asabeneh',lastName='Yetayeh'){
    let space=' '
    let fullName=firstName+space+lastName
    return fullName
}

console.log(generateFullName())
console.log(generateFullName('Aim','Tim'))

function calculateAge(birthYear,currentYear=new Date().getFullYear()){
    let age = currentYear-birthYear
    return age
}

console.log('年龄：',calculateAge(1826))

function weightOfObject(mass,gravity=9.81){
    let weight = mass*gravity+'N'// 值必须先转换为字符串
    return weight
}

console.log('物体的重量（牛顿）: ', weightOfObject(100)) // 地球表面的重力9.81
console.log('物体的重量（牛顿）: ', weightOfObject(100, 1.62)) // 月球表面的重力

console.log('------------------------')

// 用箭头函数编写上述函数
// 语法
// 声明函数
// const functionName = (param = value) => {
  //代码
// }

// 调用函数
// functionName()
// functionName(arg)

const greetings2 = (name='peter')=>{
    let message = name + ', 欢迎来到30天JavaScript挑战!'
    return message
}
console.log(greetings2())
console.log(greetings2('Asabeneh'))

const generateFullName2 = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}
console.log(generateFullName2())
console.log(generateFullName2('David', 'Smith'))

const calculateAge2 = (birthYear, currentYear = new Date().getFullYear()) => currentYear - birthYear
console.log('年龄: ', calculateAge2(1826))

const weightOfObject2 = (mass, gravity = 9.81) => mass * gravity + ' N'
console.log('物体的重量（牛顿）: ', weightOfObject2(100)) // 地球表面的重力9.81
console.log('物体的重量（牛顿）: ', weightOfObject2(100, 1.62)) // 月球表面的重力