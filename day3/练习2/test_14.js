// 提示用户输入年数
let yearsLived = prompt("请输入您活的年数：");
yearsLived = parseInt(yearsLived); // 将输入的字符串转换为整数

// 假设每年人数为365天，每天3600秒
let secondsPerYear = 365 * 24 * 60 * 60;

// 计算总秒数
let totalSecondsLived = yearsLived * secondsPerYear;

// 显示计算结果
alert("您活了" + totalSecondsLived + "秒。");
