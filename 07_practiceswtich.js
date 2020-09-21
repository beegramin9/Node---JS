const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('점수 입력: ');
rl.prompt();

rl.on('line', function (buf) {

    let input = parseInt(buf);

    let grade;
    switch (parseInt(input / 10)) {
        case 10:
        /* 여기는 왜 break가 없어요? */
        // 경우가 같을 때, 즉 10이나 9이나 결과가 똑같을 때는 사이에 break가 오지 않는다
        case 9:
            grade = 'A';
            break; /* 브레이크가 없으면 계속 밑으로 내려감 */
        case 8:
            grade = 'B';
            break;
        case 7:
            grade = 'C';
            break;
        case 6:
            grade = 'D';
            break;
        default: /* 마지막 뒤치닥거리 하는 애들 */
            grade = 'F';
        // 맨 마지막은 더 이상 내려갈게 없으니까 break가 필요없음 

    }
    console.log(`성적: ${input}, 학점: ${grade}`)
    rl.close()

});