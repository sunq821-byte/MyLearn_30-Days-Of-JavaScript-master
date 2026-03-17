// 没有参数和返回值的函数 

// 没有参数的函数，一个使数字平方的函数
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}

square() // 4

// 没有参数的函数
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum)
}

// 必须通过名称调用函数才能执行
addTwoNumbers() 

function printFullName() {
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName()