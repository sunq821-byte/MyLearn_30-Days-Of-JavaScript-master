console.log('0~100偶数')

for (let i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}

console.log('0~100奇数')

for (let i = 0; i <= 100; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}

console.log('0~100质数')

for (let i = 0; i <= 100; i++) {
    if (i <= 1) continue; // 跳过 0 和 1
    let isPrime = true;

    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

console.log('0~100和')

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(sum)

console.log('0~100奇数和和偶数和')

let sum_ou = 0
for (let i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
        sum_ou += i
    }
}
console.log(sum_ou)

let sum_ji = 0
for (let i = 0; i <= 100; i++) {
    if(i % 2 !== 0) {
        sum_ji += i
    }
}
console.log(sum_ji)

console.log('0~100奇数和和偶数数组')

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}

console.log([evenSum, oddSum]);

