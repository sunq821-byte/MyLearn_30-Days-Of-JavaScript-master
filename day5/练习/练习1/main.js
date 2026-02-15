let arr = Array()

let fiveArr = Array(5)
console.log(fiveArr.length)

let numArr = [1,2,3,4,5]
let firstNum = numArr[0]
let midNum = numArr[2]
let lastNum = numArr[4]
console.log(firstNum,midNum,lastNum)

let mixedDataTypes = [42, "Hello", true, null, { key: "value" }, [1, 2, 3], 3.14, 'A', undefined]
console.log(mixedDataTypes.length)

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log("公司数量:", itCompanies.length)
console.log("第一家公司：",itCompanies[0],"\n中间的公司：",itCompanies[3],"\n最后一家公司：",itCompanies[6])
let upper_itCom = itCompanies.map(company => company.toUpperCase())
console.log(upper_itCom)

// 使用 join 方法将数组中的元素连接成一个字符串
let companiesString = itCompanies.join(", ")
// 手动替换最后一个逗号为“和”
companiesString = companiesString.replace(/,([^,]*)$/, " 和$1")
// 构建最终的句子
let sentence = companiesString + " 是大型IT公司"
// 打印句子
console.log(sentence)

// 要检查的公司名称
let companyToCheck = "Google" // 你可以更改这个值来检查不同的公司
// 检查公司是否存在于数组中
let result = itCompanies.includes(companyToCheck) ? companyToCheck : "未找到公司"
// 打印结果
console.log(result)

// 创建一个空数组来存储包含多个 'o' 的公司
let companiesWithMultipleOs = []
// 遍历 itCompanies 数组
itCompanies.forEach(company => {
    // 计算公司名称中 'o' 的数量（不区分大小写）
    let oCount = company.toLowerCase().split('o').length - 1
    
    // 如果 'o' 的数量大于 1，则将其添加到 companiesWithMultipleOs 数组中
    if (oCount > 1) {
        companiesWithMultipleOs.push(company)
    }
})
// 检查是否有找到包含多个 'o' 的公司
let result_o = companiesWithMultipleOs.length > 0 ? companiesWithMultipleOs.join(", ") : "未找到公司"
// 打印结果
console.log(result_o)

// 使用 sort() 方法对数组排序
itCompanies.sort()
console.log("排序后的数组:", itCompanies)
// 使用 reverse() 方法反转数组
itCompanies.reverse()
console.log("反转后的数组:", itCompanies)
// 从数组中切出前3家公司
let firstThreeCompanies = itCompanies.slice(0, 3)
console.log("前3家公司:", firstThreeCompanies)
// 从数组中切出最后3家公司
let lastThreeCompanies = itCompanies.slice(-3)
console.log("最后3家公司:", lastThreeCompanies)
// 从数组中切出中间的IT公司或公司
let middleIndex = Math.floor(itCompanies.length / 2)
let middleCompany = itCompanies.slice(middleIndex, middleIndex + 1)
console.log("中间的公司:", middleCompany)
// 从数组中移除第一家IT公司
itCompanies.shift()
console.log("移除第一家IT公司后的数组:", itCompanies)
// 从数组中移除中间的IT公司或公司
middleIndex = Math.floor(itCompanies.length / 2)
itCompanies.splice(middleIndex, 1)
console.log("移除中间的IT公司后的数组:", itCompanies)
// 从数组中移除最后一家IT公司
itCompanies.pop()
console.log("移除最后一家IT公司后的数组:", itCompanies)
// 移除所有IT公司
itCompanies = []
console.log("移除所有IT公司后的数组:", itCompanies)