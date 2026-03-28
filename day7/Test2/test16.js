// 编写一个生成_randomMacAddress_的函数
function randomMacAddress(){
    const mac = []
    for(let i=0;i<6;i++){
        const octet = Math.floor(Math.random()*256)
            .toString(16) // 转16进制
            .padStart(2,'0') // 补零到两位
            .toUpperCase() // 大写
        mac.push(octet)
    }
    return mac.join(':')
}
console.log(randomMacAddress())