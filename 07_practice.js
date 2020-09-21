// /* 0에서부터 100까지의 숫자를 입력받아서
// 90점 이상이면 A
// 80< x < 90이면 B */

// for (let arg of process.argv) {
//     input = parseInt(arg);
//     console.log(arg)
//     // Array의 1, 2번 요소가 아마 다른거라서 NAN이 나올거야
//     /*  node가 process.argv[0] 이고 04_hardcoding.js가 process.argv[1]이다. */
//     if (isNaN(input))
//         continue;

//     if (input > 90) {
//         console.log(`${input}는/은 A 입니다.`);
//     } else if (input > 80) {
//         console.log(`${input}는/은 B 입니다.`);
//     } else if (input > 70) {
//         console.log(`${input}는/은 C 입니다.`);
//     } else if (input > 60) {
//         console.log(`${input}는/은 D 입니다.`);
//     } else {
//         console.log(`${input}는/은 F 입니다.`);
//     }
// }


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('점수 입력: ');
rl.prompt();

// buffer는 데이터를 한 곳에서 다른 한 곳으로 전송하는 동안 일시적으로 그 데이터를 보관하는 메모리의 영역
// 입력을 3, 4, 5, 6 이런 식으로 입력 
// 입력이 여러개 들어오면 for문으로 해결하는 게 일반적
//  그리고 split함수로 (파이썬이랑 똑같음) 구분된 array로 만들어 준다
rl.on('line', function (buf) {

    let input = parseInt(buf);

    if (input > 90) {
        console.log(`${input}는/은 A 입니다.`);
    } else if (input > 80) {
        console.log(`${input}는/은 B 입니다.`);
    } else if (input > 70) {
        console.log(`${input}는/은 C 입니다.`);
    } else if (input > 60) {
        console.log(`${input}는/은 D 입니다.`);
    } else {
        console.log(`${input}는/은 F 입니다.`);
    }
    rl.close()

});
