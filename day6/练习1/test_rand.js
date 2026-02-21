let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 101)); // 生成0到100之间的随机数
}
console.log(randomArray);

let uniqueRandomArray = [];
while (uniqueRandomArray.length < 5) {
    let randomNumber = Math.floor(Math.random() * 101); // 生成0到100之间的随机数
    if (!uniqueRandomArray.includes(randomNumber)) {
        uniqueRandomArray.push(randomNumber);
    }
}
console.log(uniqueRandomArray);

let randomID = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
}
console.log(randomID);
