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


// function pythagorean() {
//     let answer = [];
//     for (let i = 1; i <= 1000; i++) {
//         for (let k = 1; k <= 1000 - i - k; k++) {
//             if (i > k)
//                 continue;
//             /* a<b<c 라는 조건이 있으니까 */
//             if (i ** 2 + k ** 2 === (1000 - i - k) ** 2) {
//                 answer.push(i, k, 1000 - i - k)
//                 /* push() 안에 여러개를 한 번에 넣을 수도 있네? */
//                 console.log(`찾았다.`)
//             }
//         }
//     }
//     return answer
// }

// console.log(pythagorean())

/* 상태 표시 할 때 outerBreak라는 걸 쓴다던데*/
// let outerBreak = false;


// 답이 여러 쌍 있을 때 리스트를 나눠서 출력할 수 있도록 하고 싶은데 어케하지?
function pythagorean_1() {
    for (let i = 1; i <= 1000; i++) {
        for (let k = 1; k <= 1000 - i - k; k++) {



            // for (let d = 0; d <= 9; d++) {
            //     array.push([])
            // }


            if (i > k)
                continue;
            /* a<b<c 라는 조건이 있으니까 */
            if (i ** 2 + k ** 2 === (1000 - i - k) ** 2) {
                let answer = [];
                answer.push(i, k, 1000 - i - k);
                /* push() 안에 여러개를 한 번에 넣을 수도 있네? */
                console.log(`찾았다.`);
                return answer

            }
        }
    }
}

console.log(pythagorean_1())