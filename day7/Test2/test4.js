// 编写一个函数名_showDateTime_，它使用Date对象以这种格式显示时间：08/01/2020 04:08
function showDateTime(){
    // 获取日期时间
    const now = new Date()

    // 获取时间组件
    const month = String(now.getMonth() + 1).padStart(2, '0') 
    const day = String(now.getDate()).padStart(2, '0')      // 修正方法名
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')

    // 格式化时间
    const formatted = `${month}/${day}/${year} ${hours}:${minutes}`
    console.log(formatted)
}
showDateTime()