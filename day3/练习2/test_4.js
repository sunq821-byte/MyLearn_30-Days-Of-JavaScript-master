// 提示用户输入圆的半径
let radius = prompt("请输入圆的半径：");
radius = parseFloat(radius); // 将输入的字符串转换为浮点数

// 定义π的值
const pi = 3.14;

// 计算圆的面积
let area = pi * radius * radius;

// 计算圆的周长
let perimeter = 2 * pi * radius;

// 显示计算结果
alert("圆的面积是：" + area + "\n圆的周长是：" + perimeter);
