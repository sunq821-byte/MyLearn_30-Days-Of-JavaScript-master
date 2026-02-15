const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 对数组进行排序
ages.sort((a, b) => a - b);

// 找到最小和最大年龄
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

// 找到中位数年龄
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}

// 找到平均年龄
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

// 找到年龄范围
const ageRange = maxAge - minAge;

// 比较(min - average)和(max - average)的值
const minAvgDiff = Math.abs(minAge - averageAge);
const maxAvgDiff = Math.abs(maxAge - averageAge);

console.log(`Sorted ages: ${ages}`);
console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);
console.log(`Median age: ${medianAge}`);
console.log(`Average age: ${averageAge}`);
console.log(`Age range: ${ageRange}`);
console.log(`|Min - Average|: ${minAvgDiff}`);
console.log(`|Max - Average|: ${maxAvgDiff}`);
