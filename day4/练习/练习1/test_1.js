let age = prompt('输入您的年龄：')
if(age >=18 ){
    console.log('您已足够年龄驾驶')
}else{
    let year = 18 - age
    console.log(`您还需要${year}年才能驾驶。`) 
}