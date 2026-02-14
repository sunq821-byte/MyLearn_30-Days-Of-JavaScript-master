// 提示用户输入三角形的边a
let a = prompt("请输入三角形的边a长度：");
a = parseFloat(a); // 将输入的字符串转换为浮点数

// 提示用户输入三角形的边b
let b = prompt("请输入三角形的边b长度：");
b = parseFloat(b); // 将输入的字符串转换为浮点数

// 提示用户输入三角形的边c
let c = prompt("请输入三角形的边c长度：");
c = parseFloat(c); // 将输入的字符串转换为浮点数

// 计算三角形的周长
let perimeter = a + b + c;

// 显示计算结果
alert("三角形的周长是：" + perimeter);
