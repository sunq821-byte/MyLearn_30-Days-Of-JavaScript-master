// 声明一个函数名_userIdGenerator_。当调用此函数时，它生成七个字符的id。函数返回id
function userIdGenerator(){
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let result = ''
    for(let i = 0; i <=7;i++){
        const index = Math.floor(Math.random()*62)
        result += chars[index]
    }
    return result
}
console.log(userIdGenerator())