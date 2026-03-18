// 线性方程计算如下：_ax + by + c = 0_。编写一个计算线性方程值的函数_solveLinEquation
function solveLinEquation(a,b,c,x,y){
    return a*x+b*y+c
}
console.log(solveLinEquation(1,2,3,4,5))