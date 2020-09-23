// Input을 Command에 Argument로 받는 법
// process.argv 배열에 argument가 전달됨

for (let arg of process.argv) {
    input = parseInt(arg);
    console.log(arg)
    // Array의 1, 2번 요소가 아마 다른거라서 NAN이 나올거야
    /*  node가 process.argv[0] 이고 04_hardcoding.js가 process.argv[1]이다. */
    if (isNaN(input))
        continue;

    if (input % 2 === 0) {
        console.log(`${input}는/은 짝수입니다.`);
    } else {
        console.log(`${input}는/은 홀수입니다.`);
    }
}

// 뒤에 여러개 넣어도 나온다

for (let i = 2; i < process.argv.length; i++) {
    // 2부터 
    input = parseInt(process.argv[i]);

    if (input % 2 === 0) {
        console.log(`${input}는/은 짝수입니다.`);
    } else {
        console.log(`${input}는/은 홀수입니다.`);
    }

}