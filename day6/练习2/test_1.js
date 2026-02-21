let length = 10; // 指定所需的随机ID长度
let randomID = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
}

console.log(randomID);
