// 提示用户输入小时数
let hours = prompt("请输入小时数：");
hours = parseFloat(hours); // 将输入的字符串转换为浮点数

// 提示用户输入每小时费率
let rate = prompt("请输入每小时费率：");
rate = parseFloat(rate); // 将输入的字符串转换为浮点数

// 计算工资
let wage = hours * rate;

// 显示计算结果
alert("您的周收入是：" + wage);
