// Slice：切出范围内的多个项。它接受两个参数：起始位置和结束位置。它不包括结束位置。

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.slice()) // -> 复制所有项
console.log(numbers.slice(0)) // -> 复制所有项
console.log(numbers.slice(0, numbers.length)) // 复制所有项
console.log(numbers.slice(1, 4)) // -> [2,3,4] // 不包括结束位置
