// 获取当前日期时间
let now = new Date();

// 提取年、月、日、小时、分钟
let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1，并补零
let day = String(now.getDate()).padStart(2, '0'); // 补零
let hours = String(now.getHours()).padStart(2, '0'); // 补零
let minutes = String(now.getMinutes()).padStart(2, '0'); // 补零

// 创建不同格式的时间字符串
let format1 = `${year}-${month}-${day} ${hours}:${minutes}`;
let format2 = `${day}-${month}-${year} ${hours}:${minutes}`;
let format3 = `${day}/${month}/${year} ${hours}:${minutes}`;

// 显示结果
alert("YYYY-MM-DD HH:mm: " + format1 + "\nDD-MM-YYYY HH:mm: " + format2 + "\nDD/MM/YYYY HH:mm: " + format3);
