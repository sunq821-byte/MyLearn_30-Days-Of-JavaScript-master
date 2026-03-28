// 声明一个函数名_capitalizeArray_。它接受数组作为参数并返回大写数组
function capitalizeArray(arr){
     // 1.创建数组
     const newArr = []

     // 2.循环数组
     for (let i = 0; i < arr.length; i++) {
        // 3.取出当前元素
        const temp = arr[i]

        // 4.转换
        const upper = temp.toUpperCase()

        // 5.将转换后的元组添加到newArr
        newArr.push(upper)
     }
    return newArr
}

const arr = ['a','b','c','d']
console.log(capitalizeArray(arr))