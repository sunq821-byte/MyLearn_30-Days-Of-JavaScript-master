// 获取当前年份
let currentYear = new Date().getFullYear();

// 提示用户输入出生年份
let birthYear = prompt("请输入您的出生年份：");
birthYear = parseInt(birthYear); // 将输入的字符串转换为整数

// 计算用户年龄
let age = currentYear - birthYear;

// 判断是否可以驾驶
if (age >= 18) {
    alert("您" + age + "岁。您已足够年龄驾驶");
} else {
    let yearsToWait = 18 - age;
    alert("您" + age + "岁。您将在" + yearsToWait + "年后被允许驾驶。");
}
