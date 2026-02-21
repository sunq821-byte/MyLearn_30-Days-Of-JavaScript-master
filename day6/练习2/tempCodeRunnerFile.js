const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node']; // 确保 mernStack 数组已定义

// 1. 在 webTechs 数组中找到最长的单词
let longestWord = '';
for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].length > longestWord.length) {
        longestWord = webTechs[i];
    }
}
console.log(longestWord);

// 2. 使用 webTechs 数组创建以下数组的数组
let webTechsDetails = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsDetails.push([webTechs[i], webTechs[i].length]);
}
console.log(webTechsDetails);

// 3. 使用 mernStack 数组创建首字母缩略词 MERN
let mernAcronym = '';
for (let i = 0; i < mernStack.length; i++) {
    mernAcronym += mernStack[i][0];
}
console.log(mernAcronym);

// 4. 使用 for 循环遍历数组 ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 并打印出项目
const techStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let i = 0; i < techStack.length; i++) {
    console.log(techStack[i]);
}

// 5. 这是一个水果数组，['banana', 'orange', 'mango', 'lemon']，使用循环而不使用 reverse 方法反转顺序
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruits = [];
for (let i = 0; i < fruits.length; i++) {
    reversedFruits.push(fruits[fruits.length - 1 - i]);
}
console.log(reversedFruits);

// 6. 按如下所示打印数组的所有元素
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];

for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j].toUpperCase());
    }
}
