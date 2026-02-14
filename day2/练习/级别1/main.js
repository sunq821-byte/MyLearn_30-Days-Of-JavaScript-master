let challenge = '30 Days Of JavaScript'
console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(0,2))

console.log(challenge.substring(0,2))

console.log(challenge.substring(3))

console.log(challenge.includes('Script'))

console.log(challenge.split(''))

console.log(challenge.split(' '))

let arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(arr.split(','))

console.log(challenge.replace('JavaScript','Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(challenge.indexOf('J')))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let because_index = 'You cannot end a sentence with because because because is a conjunction'
console.log(because_index.indexOf('because'))
console.log(because_index.lastIndexOf('because'))
console.log(because_index.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith('30 Days Of JavaScript'))

console.log(challenge.endsWith('30 Days Of JavaScript'))

console.log(challenge.match(/a/gi))

let part1 = '30 Days of'
let part2 = 'JavaScript'
let fullPart = part1.concat(' ',part2)
console.log(fullPart)

console.log(challenge.repeat(2))