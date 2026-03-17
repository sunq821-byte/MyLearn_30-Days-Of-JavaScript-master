// 速度是通过将移动物体覆盖的总距离除以所花费的总时间计算的。编写一个计算移动物体_速度_的函数
function speed(l,t){
    let s = l/t
    return s.toFixed(2)
}
console.log(speed(100,10))