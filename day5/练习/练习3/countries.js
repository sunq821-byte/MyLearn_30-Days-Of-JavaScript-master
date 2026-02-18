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

// 1. 切出前十个国家
const firstTenCountries = countries.slice(0, 10);
console.log('First ten countries:', firstTenCountries);

// 2. 找到中间的国家
let middleCountry;
if (countries.length % 2 === 0) {
  middleCountry = countries[countries.length / 2 - 1] + ' and ' + countries[countries.length / 2];
} else {
  middleCountry = countries[Math.floor(countries.length / 2)];
}
console.log('Middle country:', middleCountry);

// 3. 根据数组长度将其分成两个数组
let firstHalf, secondHalf;
if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, countries.length / 2);
  secondHalf = countries.slice(countries.length / 2);
} else {
  firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
  secondHalf = countries.slice(Math.ceil(countries.length / 2));
}
console.log('First half:', firstHalf);
console.log('Second half:', secondHalf);

