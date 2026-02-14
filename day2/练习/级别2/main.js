// 1. 打印带引号的语句
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. 打印特蕾莎修女的引文
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// 3. 检查并处理类型比较
console.log(typeof '10' === typeof 10 ? '相等' : '不相等');
let num3 = Number('10');
console.log(num3 === 10);

// 4. 检查并处理浮点数比较
console.log(parseFloat('9.8') === 10 ? '相等' : '不相等');
let num4 = Math.ceil(parseFloat('9.8'));
console.log(num4 === 10);

// 5. 检查子字符串
console.log('python'.includes('on') && 'jargon'.includes('on'));

// 6. 检查jargon是否在句子中
let sentence = 'I hope this course is not full of jargon';
console.log(sentence.includes('jargon'));

// 7. 生成0-100随机数
console.log(Math.floor(Math.random() * 101));

// 8. 生成50-100随机数
console.log(Math.floor(Math.random() * 51) + 50);

// 9. 生成0-255随机数
console.log(Math.floor(Math.random() * 256));

// 10. 随机访问字符串字符
let str = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str.length);
console.log(str[randomIndex]);

// 11. 打印数字模式
for (let i = 1; i <= 5; i++) {
  console.log(`${i} 1 ${i} ${i*i} ${i*i*i}`);
}

// 12. 截取子字符串
let sentence12 = 'You cannot end a sentence with because because because is a conjunction';
let target = 'because because because';
let startIndex = sentence12.indexOf(target);
console.log(sentence12.substr(startIndex, target.length));