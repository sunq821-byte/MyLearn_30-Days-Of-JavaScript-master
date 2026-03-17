// 温度oC可以使用以下公式转换为oF：_oF = (oC x 9/5) + 32_。编写一个将oC转换为oF的函数_convertCelsiusToFahrenheit_
function converCelsiusToFahreneit(c){
    let f =(c*9/5)+32
    return f
}
console.log(converCelsiusToFahreneit(70))