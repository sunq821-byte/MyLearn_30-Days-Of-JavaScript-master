// Math.max返回其最大的参数。编写一个函数findMax，它接受三个参数并返回它们的最大值，而不使用Math.max方法
function findMax(a,b,c){
    let max=a
    if(b>max){
        max=b
    }else if(c>max){
        max=c
    }
    return max
}
console.log(0,10,2)