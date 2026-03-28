// 声明一个函数名_reverseArray_。它接受数组作为参数并返回数组的反转（不要使用方法）
function recerseArray (arr) {
    const newArr = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[arr.length-1-i]
    }
    return newArr
}

const arr = [1,2,3,4,5]
console.log(recerseArray(arr))