// 声明一个函数名_removeItem_。它接受一个index参数并在移除item后返回一个数组
function removeItem(arr,index) {
    return arr.slice(0,index).concat(arr.slice(index+1))
}

const arr = [1,2,3,4]
console.log(removeItem(arr,1))