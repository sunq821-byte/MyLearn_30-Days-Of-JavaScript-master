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

let upperCaseCountries = [];
for (let i = 0; i < countries.length; i++) {
    upperCaseCountries.push(countries[i].toUpperCase());
}
console.log(upperCaseCountries);

let countryLengths = [];
for (let i = 0; i < countries.length; i++) {
    countryLengths.push(countries[i].length);
}
console.log(countryLengths);

let countryDetails = [];
for (let i = 0; i < countries.length; i++) {
    let countryName = countries[i];
    let countryCode = countryName.slice(0, 3).toUpperCase();
    let countryLength = countryName.length;
    countryDetails.push([countryName, countryCode, countryLength]);
}
console.log(countryDetails);

let landCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].toLowerCase().includes('land')) {
        landCountries.push(countries[i]);
    }
}
if (landCountries.length > 0) {
    console.log(landCountries);
} else {
    console.log('所有这些国家都没有land');
}

// 1. 检查是否有以'ia'子字符串结尾的国家
let iaEndingCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].toLowerCase().endsWith('ia')) {
        iaEndingCountries.push(countries[i]);
    }
}
if (iaEndingCountries.length > 0) {
    console.log(iaEndingCountries);
} else {
    console.log('这些国家没有以ia结尾');
}

// 2. 找到包含最多字符的国家
let maxLength = 0;
let longestCountry = '';
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > maxLength) {
        maxLength = countries[i].length;
        longestCountry = countries[i];
    }
}
console.log(longestCountry);

// 3. 找到只包含5个字符的国家
let fiveCharCountries = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        fiveCharCountries.push(countries[i]);
    }
}
if (fiveCharCountries.length > 0) {
    console.log(fiveCharCountries);
} else {
    console.log('没有只包含5个字符的国家');
}
