// 1. 计算love的数量
const sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const loveCount = (sentence1.toLowerCase().match(/\blove\b/g) || []).length;
console.log(`love出现次数: ${loveCount}`);

// 2. 计算because的数量
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
const becauseCount = (sentence2.match(/because/g) || []).length;
console.log(`because出现次数: ${becauseCount}`);

// 3. 清理文本并找到最频繁的单词
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// 清理文本：移除特殊字符，只保留字母、数字和空格
const cleanedText = sentence3.replace(/[^a-zA-Z0-9\s]/g, '');
console.log('清理后文本:', cleanedText);

// 统计单词频率
const words = cleanedText.toLowerCase().split(/\s+/).filter(word => word.length > 0);
const wordFrequency = {};
words.forEach(word => {
  wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});

// 找到最频繁的单词
let mostFrequent = '';
let maxCount = 0;
for (const [word, count] of Object.entries(wordFrequency)) {
  if (count > maxCount) {
    mostFrequent = word;
    maxCount = count;
  }
}
console.log(`最频繁单词: "${mostFrequent}" (出现${maxCount}次)`);

// 4. 计算年总收入
const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// 提取所有数字
const numbers = incomeText.match(/\d+/g).map(Number);
console.log('提取的数字:', numbers);

// 计算总收入：月薪*12 + 年奖金 + 在线课程收入*12
const monthlySalary = numbers[0];
const annualBonus = numbers[1]; 
const monthlyCourses = numbers[2];
const annualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);

console.log(`年总收入: ${annualIncome} euro`);