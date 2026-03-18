// 二次方程计算如下：_ax2 + bx + c = 0_。编写一个计算二次方程值的函数_solveQuadEquation_
function solveQuadEquation(a = 0, b = 0, c = 0) {
    // 处理0个实根
    if (arguments.length === 0) {
        return { roots: [0], count: 1 }
    }

    // 尝试将 a转换为数字
    // 如果转换结果是假值（包括 0、NaN、undefined 等），则使用 0
    // 将结果赋值回变量 a
    a = Number(a) || 0
    b = Number(b) || 0
    c = Number(c) || 0

    // 处理的是二次方程退化的特殊情况
    if (a === 0) {
        if (b === 0) {
            return c === 0 ? { roots: [0], count: 1 } : { roots: [], count: 0 }
        }
        const root = -c / b
        return { roots: [root], count: 1 }
    }

    // 计算判别式
    const discriminant = b * b - 4 * a * c

    if (discriminant < 0) {
        return { roots: [], count: 0 }
    }

    if (discriminant === 0) {
        const root = -b / (2 * a)
        return { roots: [root], count: 1 }
    }

    const sqrtD = Math.sqrt(discriminant)
    const root1 = (-b + sqrtD) / (2 * a)
    const root2 = (-b - sqrtD) / (2 * a)

    // 返回对象格式，包含根和数量
    return { roots: [root1, root2], count: 2 }
}

// 测试示例
console.log(solveQuadEquation());           // { roots: [0], count: 1 }
console.log(solveQuadEquation(1, 4, 4));    // { roots: [-2], count: 1 }
console.log(solveQuadEquation(1, -1, -2));  // { roots: [2, -1], count: 2 }
console.log(solveQuadEquation(1, 7, 12));   // { roots: [-3, -4], count: 2 }
console.log(solveQuadEquation(1, 0, -4));   // { roots: [2, -2], count: 2 }
console.log(solveQuadEquation(1, -1, 0));   // { roots: [1, 0], count: 2 }