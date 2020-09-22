// const { sep } = require('path');
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.setPrompt('양의 정수 입력: ');
// rl.prompt();


// rl.on('line', function (buf) {
//     let input = parseInt(buf);
//     console.log(sepPower(input));
//     console.log(wholePower(input));



//     rl.close()
// });


function pythagorean() {
    let answer = [];
    for (let i = 1; i <= 333; i++) {
        for (let k = 1; k <= 1000 - i - k; k++) {
            if (i ** 2 + k ** 2 === (1000 - i - k) ** 2) {
                answer.push(i, k, 1000 - i - k)
                console.log(`찾았다.`)
            }
        }
    }
    return answer
}

console.log(pythagorean())