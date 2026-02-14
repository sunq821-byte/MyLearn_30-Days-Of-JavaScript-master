// 提示用户输入矩形的长度
let length = prompt("请输入矩形的长度：");
length = parseFloat(length); // 将输入的字符串转换为浮点数

// 提示用户输入矩形的宽度
let width = prompt("请输入矩形的宽度：");
width = parseFloat(width); // 将输入的字符串转换为浮点数

// 计算矩形的面积
let area = length * width;

// 计算矩形的周长
let perimeter = 2 * (length + width);

// 显示计算结果
alert("矩形的面积是：" + area + "\n矩形的周长是：" + perimeter);
