// 声明一个函数名_addItem_。它接受一个item参数并在添加item后返回一个数组
function addItem(arr,item) {
    arr.push(item)
    return arr
}

const list = [1,2,3]
const newItem = 4
console.log(addItem(list,newItem))