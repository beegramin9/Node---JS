let option;
if (process.argv.length === 4) {
    if (process.argv === 'a') {
        option = 'a';
    }
}

// 터미널에서 바로 text 파일에 write하기
/* 이게 바깥에서 데이터를 받거나, 아두이노 등 사용자한테 데이터를 받는 로직은
다 이렇게 생겼음 */

/* 2개의 모튤이 필요함 */

const fs = require('fs');
const readline = require('readline');

/* 제일 먼저 할 일은 이벤트 받기 */
if (process.argv.length < 3) {
    console.log('사용법: node 10_fileText.js filename.txt');
    process.exit(); /* 프로그램 끝내기 */
}
let filename = process.argv[2];
/* node 10_hardText.txt tmp.txt  중 tmp.txt가 되는 것*/

/* 그 다음 입력 받기 */

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('> ');
rl.prompt();

let input = '';
/* 파일에 들어갈 빈 string */
rl.on('line', function (buf) {
    input += buf + '\n';
    rl.prompt();

}).on('close', function () {
    /* 파일을 만듦으로서 닫기 */
    if (process.argv[3] === 'a') {
        console.log(`사용법: node 10_fileText.js filename.txt a
        추가하기: `)

        fs.writeFile(filename, input, (error) => {
            if (error) {
                console.log(error);
            }

        })
    } else {
        fs.writeFile(filename, input, (error) => {
            if (error) {
                console.log(error);
            }
        });
    }
});

