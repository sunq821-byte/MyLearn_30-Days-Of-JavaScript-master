// 编写一个生成_randomUserIp_的函数
function randomUserIp(){
    const a = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    const c = Math.floor(Math.random()*256)
    const d = Math.floor(Math.random()*256)
    
    return `${a}.${b}.${c}.${d}`
}
console.log(randomUserIp())