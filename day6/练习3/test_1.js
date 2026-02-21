const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

// 1. 复制 countries 数组（避免突变）
let copiedCountries = [...countries];

// 2. 对复制的数组进行排序并存储在变量 sortedCountries 中
let sortedCountries = copiedCountries.sort();

console.log(sortedCountries);

// 1. 提取所有包含'land'一词的国家，并将其作为数组打印
let landCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].toLowerCase().includes('land')) {
        landCountries.push(countries[i]);
    }
}
console.log(landCountries);
// 2. 找到包含最多字符的国家
let longestCountry = '';
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longestCountry.length) {
        longestCountry = countries[i];
    }
}
console.log(longestCountry);
// 3. 提取所有只包含四个字符的国家，并将其作为数组打印
let fourCharCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 4) {
        fourCharCountries.push(countries[i]);
    }
}
console.log(fourCharCountries);
// 4. 提取所有包含两个或更多单词的国家，并将其作为数组打印
let multiWordCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].split(' ').length >= 2) {
        multiWordCountries.push(countries[i]);
    }
}
console.log(multiWordCountries);
// 5. 反转 countries 数组并将每个国家名称大写，将其存储为数组
let reversedCountriesUpperCase = [];
for (let i = 0; i < countries.length; i++) {
    reversedCountriesUpperCase.push(countries[countries.length - 1 - i].toUpperCase());
}
console.log(reversedCountriesUpperCase);
