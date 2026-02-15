let day = prompt('请录入星期：').toLowerCase()

switch (day) {
    case 'saturday':
        console.log('星期六是周末。')
        break
    case 'sunday':
        console.log('星期日是周末。')
        break
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log('星期' + day.charAt(0).toUpperCase() + day.slice(1) + '是工作日。')
        break
    default:
        console.log('输入的星期无效')
        break
}
