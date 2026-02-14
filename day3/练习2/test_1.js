// 提示用户输入三角形的底
let base = prompt("请输入三角形的底：");
base = parseFloat(base); // 将输入的字符串转换为浮点数

// 提示用户输入三角形的高
let height = prompt("请输入三角形的高：");
height = parseFloat(height); // 将输入的字符串转换为浮点数

// 计算三角形的面积
let area = 0.5 * base * height;

// 显示计算结果
alert("三角形的面积是：" + area);
