// 사용자가 입력한 글을 받는 방법

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('정수 ,로 구분해서 여러개 입력:');
rl.prompt();

// buffer는 데이터를 한 곳에서 다른 한 곳으로 전송하는 동안 일시적으로 그 데이터를 보관하는 메모리의 영역
// 입력을 3, 4, 5, 6 이런 식으로 입력 
// 입력이 여러개 들어오면 for문으로 해결하는 게 일반적
//  그리고 split함수로 (파이썬이랑 똑같음) 구분된 array로 만들어 준다
rl.on('line', function (buf) {

    let bufArray = buf.split(',');

    console.log(bufArray);

    for (let item of bufArray) {
        let input = parseInt(item)
        if (input % 3 === 0) {
            console.log(`${input}는/은 3의 배수입니다.`);
        } else {
            console.log(`${input}는/은 3의 배수가 아닙니다.`);
        }

    }
    rl.close()
});















// for (let i = 2; i < process.argv.length; i++) {
//     // 2부터 
//     input = parseInt(process.argv[i]);

//     if (input % 2 === 0) {
//         console.log(`${input}는/은 짝수입니다.`);
//     } else {
//         console.log(`${input}는/은 홀수입니다.`);
//     }

// }