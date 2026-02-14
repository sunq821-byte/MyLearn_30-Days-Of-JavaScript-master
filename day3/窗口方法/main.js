console.log('------------\n窗口alert()方法')
// alert()方法显示一个带有指定消息和确定按钮的警告框。它是一个内置方法，接受一个参数
// alert(message)
alert('欢迎来到30天JavaScript挑战')

console.log('------------\n窗口prompt()方法')
// 窗口prompt方法在浏览器上显示一个带有输入的提示框，以获取输入值，输入数据可以存储在变量中。prompt()方法接受两个参数。第二个参数是可选的。
// prompt('必需文本', '可选文本')
let number = prompt('输入数字', '数字放在这里')
console.log(number)

console.log('------------\n窗口confirm()方法')
/* confirm()方法显示一个带有指定消息的对话框，以及确定和取消按钮。
确认框通常用于向用户请求执行某些操作的权限。窗口confirm()接受一个字符串作为参数。
单击确定产生true值，而单击取消按钮产生false值。 */
const agree = confirm('您确定要删除吗？ ')
console.log(agree) // 结果将根据您单击对话框的内容为true或false