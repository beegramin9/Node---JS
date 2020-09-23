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
    for (let i = 1; i <= 1000; i++) {
        for (let k = 1; k <= 1000 - i - k; k++) {
            if (i > k)
                continue;
            /* a<b<c 라는 조건이 있으니까 */
            if (i ** 2 + k ** 2 === (1000 - i - k) ** 2) {
                answer.push(i, k, 1000 - i - k)
                console.log(`찾았다.`)
            }
        }
    }
    return answer
}

console.log(pythagorean())