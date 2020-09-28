const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('1부터 99까지의 숫자 입력: ');
rl.prompt();

// 숫자를 분해하고 붙여야 하니까 숫자로 접근하기보다는 문자로 접근하자
rl.on('line', function (buf) {
    /* 'line' 이벤트는 엔터를 쳤을 때 발생 */

    let orgNumber = (buf.length > 1) ? buf : "0" + buf; /* 내 알고리즘은 여기 if에서 이상하게 된 듯 */
    let tmp = orgNumber;
    let cycle = 0;

    while (true) {
        let sum = parseInt(tmp[0]) + parseInt(tmp[1])
        let newNumber = tmp[1] + sum % 10;
        /*  tmp Str이니까 sum이 Int라도 newNumber는 Str */
        cycle++;
        console.log(`새로운 숫자 ${newNumber}, ${cycle} 회`);
        if (orgNumber === newNumber)
            break;
        if (cycle > 100)
            /* 이 코드는 무한루프를 빠져나가기 위한 코드, 연습할 때
            CPIU의 계산속도가 너무 빠르면 Ctrl+C 가 먹히지 않는다. */
            break;
        tmp = newNumber;
    }
    rl.close()

});