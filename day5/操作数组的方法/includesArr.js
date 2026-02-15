// includes：检查项是否存在于数组中。如果存在，它返回true，否则返回false。

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // 网络技术列表

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false