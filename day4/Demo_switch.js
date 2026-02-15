/* Switch是**if else if else else**的替代方案。
switch语句以*switch*关键字开头，后跟括号和代码块。在代码块内部，我们将有不同的case。如果switch语句括号中的值与case值匹配，则运行case块。
break语句用于终止执行，因此在条件满足后代码执行不会继续向下执行。如果所有case都不满足条件，则运行default块。 */

/* switch(caseValue){
  case 1:
    // 代码
    break
  case 2:
   // 代码
   break
  case 3:
   // 代码
   break
  default:
   // 代码
} */

   let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('你需要一件雨衣。')
    break
  case 'cloudy':
    console.log('可能很冷，你需要一件夹克。')
    break
  case 'sunny':
    console.log('自由外出。')
    break
  default:
    console.log(' 不需要雨衣。')
}

// Switch 更多示例
let dayUserInput = prompt('今天是星期几？')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('今天是星期一')
    break
  case 'tuesday':
    console.log('今天是星期二')
    break
  case 'wednesday':
    console.log('今天是星期三')
    break
  case 'thursday':
    console.log('今天是星期四')
    break
  case 'friday':
    console.log('今天是星期五')
    break
  case 'saturday':
    console.log('今天是星期六')
    break
  case 'sunday':
    console.log('今天是星期日')
    break
  default:
    console.log('这不是工作日。')
}

// 在case中使用条件的示例
let num = prompt('输入数字');
switch (true) {
  case num > 0:
    console.log('数字是正数');
    break;
  case num == 0:
    console.log('数字是零');
    break;
  case num < 0:
    console.log('数字是负数');
    break;
  default:
    console.log('输入的值不是数字');
}
