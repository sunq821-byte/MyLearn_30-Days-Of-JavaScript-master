// fill：用静态值填充所有数组元素
const arr = Array() // 创建一个空数组
console.log(arr)

const eightXvalues = Array(8).fill('X') // 它创建八个用'X'填充的元素值
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // 它创建八个用'0'填充的元素值
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // 它创建4个用'4'填充的元素值
console.log(four4values) // [4, 4, 4, 4]