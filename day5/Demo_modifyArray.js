// 数组是可变的。一旦创建了数组，我们就可以修改数组元素的内容。
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // 将索引0处的1更改为10
numbers[1] = 20      // 将索引1处的2更改为20

console.log(numbers) // [10, 20, 3, 4, 5]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries[0] = 'Afghanistan'  // 用Afghanistan替换Albania
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // 用Korea替换Kenya

console.log(countries)