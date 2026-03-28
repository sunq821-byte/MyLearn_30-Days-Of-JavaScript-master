// 编写一个函数，它接受任意数量的参数并返回参数的总和
function sum(...nums){
    let total =0 
    for(const num of nums){
        total +=  num
    }
    return total
}
console.log(sum(1,2,3))