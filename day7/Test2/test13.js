// 声明一个函数名evensAndOdds。它接受一个正整数作为参数并计算该数字中偶数和奇数的数量
function eventAndOdds(n){
    let ji = 0
    let ou = 0
    if(n>0){
        for(let i = 1; i<=n;i++){
            if(i%2==0){
                ou++
            }else{
                ji++
            }
        }
    }
    return `奇数的数量是${ji}。\n偶数的数量是${ou}。`
}
console.log(eventAndOdds(7))