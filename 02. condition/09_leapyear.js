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

    //  이걸 if문으로 하려면 제일 까다로운 조건인 400 윤년부터 써내려가면 된다
    /*  내려가면서 자동적으로 위에 조건을 배제하게 됩니다. */
    /*  if (input % 400 === 0) {
         console.log(`${input}은 윤년입니다.`);
     } else if (input % 100 === 0) {
         console.log(`${input}은 윤년이 아닙니다.`);
     } else if (input % 4 === 0) {
         console.log(`${input}은 윤년입니다.`);
     } else {
         console.log(`${input}은 윤년이 아닙니다.`);
     }
  */
    rl.close()
});