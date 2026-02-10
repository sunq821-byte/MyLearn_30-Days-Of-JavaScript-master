let space = ' '           // 空字符串
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let age = 20
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// 连接，合并两个字符串。
let fullName = firstName + space + lastName; 
console.log(fullName);

// 使用加法运算符连接
let fullName2 =firstName + space + lastName
let personInfoOne = fullName2 + '. I am ' + age + '. I live in ' + country; // ES5字符串加法
console.log(personInfoOne)

//长文本
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)