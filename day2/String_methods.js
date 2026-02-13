
console.log('-------------------\nlength')
// length: 字符串*length*方法返回字符串中的字符数，包括空格
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
let str = '喜羊羊'
console.log(str.length)

console.log('-------------------\nstring')
// string: 我们可以使用索引访问字符串中的每个字符。在编程中，计数从0开始。字符串的第一个索引是零，最后一个索引是字符串长度减一
let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)           // J
let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]
console.log(lastLetter)            // t
let lastIndex = string.length - 1
console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

console.log('-------------------\ntoUpperCase()')
//*toUpperCase()*: 此方法将字符串转换为大写字母
console.log(string.toUpperCase())     // JAVASCRIPT
console.log(firstName.toUpperCase())  // ASABENEH
let country = 'Finland'
console.log(country.toUpperCase())    // FINLAND

console.log('-------------------\ntoLowerCase()')
//*toLowerCase()*: 此方法将字符串转换为小写字母
console.log(string.toLowerCase())     // javascript
console.log(firstName.toLowerCase())  // asabeneh
console.log(country.toLowerCase())   // finland

console.log('-------------------\nsubstr()')
//*substr()*: 它接受两个参数，起始索引和要切片的字符数，注意此标记已被废弃，实际开发不采取,多用slice() 或 substring()
let jsString = 'JavaScript'
console.log(jsString.substr(4,6))    // Script
let jsCountry = 'Finland'
console.log(jsCountry.substr(3, 4))   // land

console.log('-------------------\nsubstring()')
// *substring()*: 它接受两个参数，起始索引和停止索引，但不包括停止索引处的字符
// let string = 'JavaScript'
console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script
// let country = 'Finland'
console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land

console.log('-------------------\nslice()')
// *slice()*: 它接受两个参数，起始索引和停止索引，但不包括停止索引处的字符
// let string = 'JavaScript'
console.log(string.slice(0,4))     // Java
console.log(string.slice(4,10))    // Script
console.log(string.slice(4))       // Script
// let country = 'Finland'
console.log(country.slice(0, 3))   // Fin
console.log(country.slice(3, 7))   // land
console.log(country.slice(3))      // land

console.log('-------------------\nsplit()')
// *split()*: split方法在指定位置分割字符串
let string_split = '30 Days Of JavaScript'
console.log(string_split.split())     // 更改为数组 -> ["30 Days Of JavaScript"]
console.log(string_split.split(' '))  // 在空格处分割为数组 -> ["30", "Days", "Of", "JavaScript"]

//let firstName = 'Asabeneh'
console.log(firstName.split())    // 更改为数组 -> ["Asabeneh"]
console.log(firstName.split(''))  // 在每个字母处分割为数组 ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))  // 在逗号处分割为数组 -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

console.log('-------------------\ntrim()')
//trim()*: 删除字符串开头或结尾的空格
let string_trim = '   30 Days Of JavaScript   '
console.log(string_trim)
console.log(string_trim.trim(' '))

let firstName_trim = ' Asabeneh '
console.log(firstName_trim)
console.log(firstName_trim.trim())  // 仍然删除字符串开头和结尾的空格

console.log('-------------------\nincluds()')
// *includes()*: 它接受一个子字符串参数，并检查子字符串参数是否存在于字符串中。*includes()*返回一个布尔值。如果子字符串存在于字符串中，则返回true，否则返回false
let string_includs = '30 Days Of JavaScript'
console.log(string_includs.includes('Days'))     // true
console.log(string_includs.includes('days'))     // false - 它区分大小写！
console.log(string_includs.includes('Script'))   // true
console.log(string_includs.includes('script'))   // false
console.log(string_includs.includes('java'))     // false
console.log(string_includs.includes('Java'))     // true

let country_includs = 'Finland'
console.log(country_includs.includes('fin'))     // false
console.log(country_includs.includes('Fin'))     // true
console.log(country_includs.includes('land'))    // true
console.log(country_includs.includes('Land'))    // false

console.log('-------------------\nreplace()')
// *replace()*: 接受旧子字符串和新子字符串作为参数
let string_replace = '30 Days Of JavaScript'
console.log(string_replace.replace('JavaScript', 'Python')) // 30 Days Of Python

let country_replace = 'Finland'
console.log(country_replace.replace('Fin', 'Noman'))       // Nomanland

console.log('-------------------\ncharAt()')
// *charAt()*: 接受索引并返回该索引处的值
// string.charAt(index)
let string_charAt = '30 Days Of JavaScript'
console.log(string_charAt.charAt(0))        // 3

let lastIndex_charAt = string.length - 1
console.log(string_charAt.charAt(lastIndex)) // t

console.log('-------------------\ncharCodeAt()')
// *charCodeAt()*: 接受索引并返回该索引处值的字符代码（ASCII编号）
// string.charCodeAt(index)
let string_charCodeAt = '30 Days Of JavaScript'
console.log(string_charCodeAt.charCodeAt(3))        // D ASCII编号是68

let lastIndex_charCodeAt = string_charCodeAt.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII是116

console.log('-------------------\nindexOf()')
// *indexOf()*: 接受一个子字符串，如果子字符串存在于字符串中，则返回子字符串的第一个位置，如果不存在，则返回-1
// string.indexOf(substring)
let string_indexOf = '30 Days Of JavaScript'

console.log(string_indexOf.indexOf('D'))          // 3
console.log(string_indexOf.indexOf('Days'))       // 3
console.log(string_indexOf.indexOf('days'))       // -1
console.log(string_indexOf.indexOf('a'))          // 4
console.log(string_indexOf.indexOf('JavaScript')) // 11
console.log(string_indexOf.indexOf('Script'))     //15
console.log(string_indexOf.indexOf('script'))     // -1

console.log('-------------------\nlastIndexOf()')
// *lastIndexOf()*: 接受一个子字符串，如果子字符串存在于字符串中，则返回子字符串的最后一个位置，如果不存在，则返回-1
// string.lastIndexOf(substring)
let string_lastIndexOf = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string_lastIndexOf.lastIndexOf('love'))       // 67
console.log(string_lastIndexOf.lastIndexOf('you'))        // 63
console.log(string_lastIndexOf.lastIndexOf('JavaScript')) // 38

console.log('-------------------\nconcat()')
// *concat()*: 它接受许多子字符串并将它们连接起来
// string.concat(substring, substring, substring)
let string_concat = '30'
console.log(string_concat.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country_concat = 'Fin'
console.log(country_concat.concat("land")) // Finland

console.log('-------------------\nstartsWith()')
// *startsWith*: 它接受一个子字符串作为参数，并检查字符串是否以该指定子字符串开头。它返回一个布尔值（true或false）
// string.startsWith(substring)
let string_startsWith = 'Love is the best to in this world'

console.log(string_startsWith.startsWith('Love'))   // true
console.log(string_startsWith.startsWith('love'))   // false
console.log(string_startsWith.startsWith('world'))  // false

let country_startsWith = 'Finland'
console.log(country_startsWith.startsWith('Fin'))   // true
console.log(country_startsWith.startsWith('fin'))   // false
console.log(country_startsWith.startsWith('land'))  //  false

console.log('-------------------\nendsWith()')
// *endsWith*: 它接受一个子字符串作为参数，并检查字符串是否以该指定子字符串结尾。它返回一个布尔值（true或false）。
// string.endsWith(substring)
let string_endsWith = 'Love is the most powerful feeling in the world'
console.log(string_endsWith.endsWith('world'))         // true
console.log(string_endsWith.endsWith('love'))          // false
console.log(string_endsWith.endsWith('in the world')) // true

let country_endsWith = 'Finland'
console.log(country_endsWith.endsWith('land'))         // true
console.log(country_endsWith.endsWith('fin'))          // false
console.log(country_endsWith.endsWith('Fin'))          //  false

console.log('-------------------\nsearch()')
// *search*: 它接受一个子字符串作为参数，并返回第一个匹配项的索引。搜索值可以是字符串或正则表达式模式
// string.search(substring)
let string_search = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string_search.search('love'))          // 2
console.log(string_search.search(/javascript/gi))  // 7

console.log('-------------------\nmatch()')
// *match*: 它接受一个子字符串或正则表达式模式作为参数，如果有匹配则返回一个数组，如果没有则返回null。让我们看看正则表达式模式是什么样子的。它以/符号开始，以/符号结束
// string.match(substring)
/* 
let string_match = 'love'
let patternOne_match = /love/     // 没有任何标志
let patternTwo_match = /love/gi   // g-表示在整个文本中搜索，i-不区分大小写 
// */

let string_match = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string_match.match('love'))

let pattern_match = /love/gi
console.log(string_match.match(pattern_match))   // ["love", "love", "love"]

let txt_match = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx_match = /\d+/

// d带有转义字符意味着d不是普通d，而是作为数字
// +表示一个或多个数字，
// 如果后面有g，表示全局，到处搜索。

console.log(txt_match.match(regEx_match))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt_match.match(/\d+/g)) // ["2019", "30", "2020"]

console.log('-------------------\nreplace()')
// *repeat()*: 它接受一个数字作为参数，并返回字符串的重复版本
// string.repeat(n)
let string_repeat = 'love'
console.log(string_repeat.repeat(10)) // lovelovelovelovelovelovelovelovelove