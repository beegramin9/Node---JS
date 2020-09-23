const { sep } = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('양의 정수 입력: ');
rl.prompt();


function sepPower(number) {
    let sepSum = 0;
    for (let i = 1; i <= number; i++) {
        sepSum += i ** 2;
    }
    return sepSum
}

function wholePower(number) {
    let wholeSum = 0;
    for (let i = 1; i <= number; i++) {
        wholeSum += i;
    }
    return wholeSum ** 2
}


rl.on('line', function (buf) {
    let input = parseInt(buf);
    console.log(`1부터 ${input}까지 제곱의 합: ${sepPower(input)}`);
    console.log(`1부터 ${input}까지 합의 제곱: ${wholePower(input)}`);



    rl.close()
});
