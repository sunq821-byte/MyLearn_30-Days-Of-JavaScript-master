// Splice：它接受三个参数：起始位置、要移除的次数和要添加的项数。


const numbers = [1, 2, 3, 4, 5]
numbers.splice()
console.log(numbers)                // -> 移除所有项

numbers.splice(0,1)
console.log(numbers)            // 移除第一项

numbers.splice(3, 3, 7, 8, 9)
console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //它移除三个项并替换三个项