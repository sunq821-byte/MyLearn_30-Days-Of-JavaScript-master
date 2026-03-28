// 声明一个函数名_randomHexaNumberGenerator_。当调用此函数时，它生成一个随机十六进制数。函数返回十六进制数
function randomHexaNumberGenerator(){
    const chars = '0123456789abcdef'
    let result = '#'
    for (let i = 0; i <6;i++){
        const index = Math.floor(Math.random()*16)
        result += chars[index]
    }
    return result
}
console.log(randomHexaNumberGenerator())