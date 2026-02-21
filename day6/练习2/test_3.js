let rgbColor = 'rgb(';
for (let i = 0; i < 3; i++) {
    let randomValue = Math.floor(Math.random() * 256); // 生成0到255之间的随机数
    rgbColor += randomValue;
    if (i < 2) {
        rgbColor += ',';
    }
}
rgbColor += ')';

console.log(rgbColor);
