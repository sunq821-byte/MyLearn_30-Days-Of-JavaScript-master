// 变量遵循JavaScript中的驼峰命名约定

// 声明具有不同数据类型的变量
let firstName = 'Asabeneh' // 人的名字
let lastName = 'Yetayeh' // 人的姓氏
let country = 'Finland' // 国家
let city = 'Helsinki' // 首都
let age = 100 // 年龄（年）
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)

// 声明具有数字值的变量,注意变量具有唯一性，不可重复,但可修改，如下面的age
// let age = 100 // 年龄（年）
age = 200 // 年龄（年）
const gravity = 9.81 // 地球重力，单位m/s²
const boilingPoint = 100 // 水的沸点，温度单位°C
const PI = 3.14 // 几何常数
console.log(age,gravity, boilingPoint, PI)

// 变量也可以用逗号分隔在一行中声明，但我建议使用单独的行以使代码更具可读性
let name = 'Asabeneh', job = 'teacher', live = 'Finland'
console.log(name, job, live)