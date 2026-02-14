// 计算y的值
function calculateY(x) {
    return x * x + 6 * x + 9;
}

// 找出y为0时的x值
function findXForZeroY() {
    // 这是一个二次方程 y = x^2 + 6x + 9，可以简化为 (x + 3)^2 = 0
    // 因此，x = -3
    return -3;
}

// 尝试使用不同的x值
let xValues = [0, 1, -1, -3];
let results = xValues.map(x => "当x是：" + x + "时，y是：" + calculateY(x));

// 显示计算结果
alert(results.join("\n") + "\n当y为0时，x是：" + findXForZeroY());
