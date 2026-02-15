let age_2 = 0
let myAge_2 = 20
let yourAge_2 = prompt('请输入您的年龄：')
if (myAge_2 > yourAge_2){
    age_2 = myAge_2 - yourAge_2
    console.log(`您比我小${age_2}岁`)
}else{
    age_2 = yourAge_2 - myAge_2
    console.log(`您比我大${age_2}岁`)
}