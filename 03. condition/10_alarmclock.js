const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('시간을 입력하세요.:');
rl.prompt();

rl.on('line', function (buf) {

    let bufArray = buf.split(' ');

    let H = parseInt(bufArray[0]);
    let M = parseInt(bufArray[1]);

    if (H > 0) {
        H = H % 24
    } else {
        H = 24
    }

    M = M % 60

    if (M >= 45) {
        M -= 45;
    } else {
        M += 15;
        H -= 1
    }
    console.log(H, M > 9 ? M : '0' + M);
    /* 삼항 연산자로 0분이 나와도 00분으로 나올 수 있도록 */
    rl.close()
});