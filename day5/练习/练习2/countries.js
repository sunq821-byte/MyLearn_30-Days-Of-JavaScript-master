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
]
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  // 如果不存在，添加到国家列表中
  countries.push('Ethiopia');
  console.log(countries);
}
module.exports = countries;
