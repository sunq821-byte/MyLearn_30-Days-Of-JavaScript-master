let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// 使用正则表达式去除标点符号
let cleanedText = text.replace(/[^\w\s]|_/g, "");
let words = cleanedText.split(' ')
console.log(words)
console.log(words.length)