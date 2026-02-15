let score = parseInt(prompt('请输入分数：'))

let grade
switch (true) {
    case (score >= 80 && score <= 100):
        grade = 'A'
        break
    case (score >= 70 && score <= 89):
        grade = 'B'
        break
    case (score >= 60 && score <= 69):
        grade = 'C'
        break
    case (score >= 50 && score <= 59):
        grade = 'D'
        break
    case (score >= 0 && score <= 49):
        grade = 'E'
        break
    default:
        grade = '输入的分数无效'
        break
}

console.log(grade);
