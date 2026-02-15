const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
if (webTechs.includes('Ethiopia')) {
  console.log('Sass是CSS预处理器');
} else {
  // 如果不存在，添加到列表中
  webTechs.push('Sass');
  console.log(webTechs);
}
module.exports = webTechs;
