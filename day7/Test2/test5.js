// 声明一个函数名_swapValues_。此函数将x的值交换为y
function swapValues (x,y) {
    const temp = x
    x = y
    y = temp
    console.log(x,y)
}
swapValues(1,2)