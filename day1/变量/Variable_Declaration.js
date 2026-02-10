// 三种变量声明示例

// 1. let - 可以修改
let age = 25;      // 声明时可以修改的变量
age = 30;          // ✅ 可以重新赋值
console.log(age);  // 输出: 30

// 2. const - 不可修改
const name = "张三";  // 声明后不能修改
// name = "李四";     // ❌ 报错：不能重新赋值
console.log(name);    // 输出: 张三

// 3. var - 可以修改（不推荐）
var score = 85;       // 旧的方式
score = 90;           // ✅ 可以修改
console.log(score);   // 输出: 90