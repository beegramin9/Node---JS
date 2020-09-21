const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('년도를 입력하세요.:');
rl.prompt();

rl.on('line', function (buf) {

    let input = parseInt(buf);

    console.log(input);

    if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
        console.log(`${input}은 윤년입니다.`);
    } else {
        console.log(`${input}은 윤년이 아닙니다.`);
    }

    rl.close()
});