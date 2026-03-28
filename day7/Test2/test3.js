// 声明一个函数名_printArray_。它接受数组作为参数并打印出数组的每个值
function printArray(arr) {
    if (!Array.isArray(arr)) {
        console.error('参数必须为一个数组')
        return
    }

    // 遍历数组
    console.log(arr.join(' ' ))
}

const number = [1,2,3,4,5,6]
printArray(number)