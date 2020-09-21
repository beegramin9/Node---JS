// 사용자가 입력한 글을 받는 방법

// 여기서부터 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('정수 입력:');
rl.prompt();
// 여기까지는 어떻게 할 수 없고 그냥 베껴.

rl.on('line', function (buffer) { /* function (line)대신 화살표함수 line => 을 사용할 수도 있다. */
    /* 아규먼트가 하나일 땐 x =>,  두개 이상일 땐 (x=>) , 하나도 없을 땐 그냥 () 게만 */
    /* 쓰면 완전 다 똑같이 작용한다 */
    /*  사람이 입력을 치고 엔터를 치면 line이라는 이벤트가 발생 */
    /*  즉 저기 있는 line은 이벤트의 라인 */
    /*  그러면 그 뒤부터 이런것들을 처리하세요 라고 나오는 것  */
    let input = parseInt(buffer); /* 입력값은 항상 문자열로 들어오니까(이건 모든 랭귀지에서 공통) 정수형으로 바꾸고 싶으면 parseInt */
    /* 여기의 line은 그냥 변수. 저기 위 function(line)과 같기만 하면 됨 */
    // 여기까지는 입력받는 로직

    // 내가 원하는 알고리즘은 여기서부터 시작하면 됨
    if (input % 3 === 0) {
        console.log(`${input}는/은 3의 배수입니다.`);
    } else {
        console.log(`${input}는/은 3의 배수가 아닙니다.`);
    }

    rl.close()
    // 그리고 끝날 땐 반드시 close()를 써줘야 함
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